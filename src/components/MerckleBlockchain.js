
import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import Block from "./Block";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import MerckleBlock from "./MerckleBlock";

function MerckleBlockchain(props) {

    const [blocks, setBlocks] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);

    const reloadData = () => {
        setRefresh(true)
    }

    const reloadBlockchain = useCallback(async () => {
        await axios
        .get("http://localhost:8080/merkleblocks/")
        .then((response) => {
            //console.log(response.data)
            setBlocks(response.data)
            console.log(response.data)
            setLoading(false);
        })
        .catch((error) => console.log(error.message)); 
    }, [axios])

    const deleteBlockchain = () => {
        axios
        .delete("http://localhost:8080/merkleblocks/")
        .then((response) => {
            if (response.status !== 200) {
                console.log("No se pudo eliminar.")
                return
            }
            toast.success('Blockhain eliminada.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        })
        .catch((error) => console.log(error.message)); 
    }


    useEffect(() => {
        if (refresh) {
            reloadBlockchain()
            setRefresh(false)
        }
        /* axios
            .get("http://localhost:8080/blocks/")
            .then((response) => {
                //console.log(response.data)
                setBlocks(response.data)
                setLoading(false);
            })
            .catch((error) => console.log(error.message)); */
    }, [refresh,reloadBlockchain])

    if (isLoading) {
        return <Spinner animation="border" variant="primary" />;
    }

    return (
        <>
            <Row className="gx-0 mt-4 d-flex justify-content-center">
                <Col xs={10}>
                <Card>
                    <Card.Header><h4>Merckle Blockchain </h4></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                            <Button variant="outline-primary" size="sm" className="m-1" onClick={() => reloadData()}>Refrescar</Button>
                            <Button variant="outline-danger" size="sm" className="m-1" onClick={() => deleteBlockchain()}>Eliminar</Button>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-around">
                            {
                                blocks.map((block, index) =>
                                    <Col xs={3} key={index} className="mt-2"><MerckleBlock data={block.merkleTree} hash={block.hash} previousHash={block.previousHash} timeStamp={block.timeStamp} index={index} /></Col>
                                )
                            }
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <ToastContainer />
        </>
    )

}

export default MerckleBlockchain;