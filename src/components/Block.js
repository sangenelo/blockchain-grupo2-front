
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
                    <Card.Text>
                        <Row>
                            <Col>Origen: {props.data.sender}</Col>
                            <Col>Destino: {props.data.receiver}</Col>
                            <Col>Monto: {props.data.amount}</Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><small>Hash: {props.hash}</small></ListGroup.Item>
                    <ListGroup.Item><small>TimeStamp {props.timeStamp}</small></ListGroup.Item>
                </ListGroup>

                <Card.Footer>
                    <small className="text-muted">Hash bloque anterior: {props.prevHash}</small>
                </Card.Footer>
            </Card>
        </>
    )

}

export default Block;