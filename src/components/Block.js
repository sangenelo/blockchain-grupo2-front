
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import blockchain from '../img/blockchain.jpg';

function Block(props) {


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
                                    {
                                        props.data.map((record, index) =>
                                            <ListGroup horizontal key={index} className="mt-2">
                                                <ListGroup.Item className="flex-fill"><small><strong>DNI:</strong> {record.dniAlumno}</small></ListGroup.Item>
                                                <ListGroup.Item className="flex-fill"><small><strong>Materia:</strong> {record.materia}</small></ListGroup.Item>
                                                <ListGroup.Item className="flex-fill"><small><strong>Nota:</strong> {record.nota}</small></ListGroup.Item>
                                            </ListGroup>
                                        )
                                    }
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

export default Block;