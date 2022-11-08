
import { useEffect, useState } from "react";
import axios from 'axios';
import Block from "./Block";
import { Card, Col, Row, Spinner } from "react-bootstrap";

function Blockchain(props) {

    const [blocks, setBlocks] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8080/blocks/")
            .then((response) => {
                //console.log(response.data)
                setBlocks(response.data)
                setLoading(false);
            })
            .catch((error) => console.log(error.message));
    }, [])

    if (isLoading) {
        return <Spinner animation="border" variant="primary" />;
    }

    return (
        <>
            <Row className="gx-0 mt-4 d-flex justify-content-center">
                <Col xs={10}>
                <Card>
                    <Card.Header><h4>Blockchain</h4></Card.Header>
                    <Card.Body>
                        <Row className="d-flex justify-content-start">
                            {
                                blocks.map((block, index) =>
                                    <Col xs={3} key={index}><Block data={block.data} hash={block.hash} prevHash={block.prevHash} timeStamp={block.timeStamp} index={index} /></Col>
                                )
                            }
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </>
    )

}

export default Blockchain;