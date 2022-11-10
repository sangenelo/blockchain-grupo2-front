
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import blockchain from '../img/blockchain.jpg';

function Block(props) {


    useEffect(() => {

    }, [])

    return (
        <>
            <Card style={{ width: '18rem' }} className="shadow">
                <Card.Img variant="top" src={blockchain} />
                <Card.Body>
                    <Card.Title>Bloque {props.index}</Card.Title>
                        <Row>
                            {props.data !== null ?
                                <>
                                    <Col>DNI: {props.data.dniAlumno}</Col>
                                    <Col>Materia: {props.data.materia}</Col>
                                    <Col>Nota: {props.data.nota}</Col>
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