
import { useEffect } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import blockchain from '../img/blockchain.jpg';
import MerckleModal from "./MerckleModal";

function MerckleBlock(props) {

    useEffect(() => {

    }, [])

    return (
        <>

            <Card className="shadow">
                <Card.Img variant="top" src={blockchain} />
                <Card.Body>
                    <Card.Title>Bloque {props.index}</Card.Title>
                    <Row>
                        {props.data !== null ?
                            <>
                                <Col>
                                    <MerckleModal block={props.data}/>
                                </Col>
                            </> :
                            <>
                                <Col>
                                    <p>Genesis Block</p>
                                </Col>
                            </>}

                    </Row>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><small>Hash: {props.hash}</small></ListGroup.Item>
                    <ListGroup.Item><small>TimeStamp {props.timeStamp}</small></ListGroup.Item>
                </ListGroup>

                <Card.Footer>
                    <small className="text-muted">Hash bloque anterior: {props.previousHash}</small>
                </Card.Footer>
            </Card>
        </>
    )

}

export default MerckleBlock;