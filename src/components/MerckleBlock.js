
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import blockchain from '../img/blockchain.jpg';

function MerckleBlock(props) {

    const block = {
        "previousHash": "f5ddc190e61cb951616a72097fb406389d813aa3a6bd5cc564cf2fc6e82bceec",
        "timeStamp": 1668291878172,
        "data": {
            "firstNode": {
                "firstNode": {
                    "data": {
                        "dniAlumno": "35901197",
                        "materia": "TICs",
                        "nota": 1
                    },
                    "hash": "hash1"
                },
                "secondNode": {
                    "data": {
                        "dniAlumno": "11289003",
                        "materia": "Algebra I",
                        "nota": 2
                    },
                    "hash": "hash2"
                },
                "hash": "hash1-2"
            },
            "secondNode": {
                "firstNode": {
                    "data": {
                        "dniAlumno": "345556890",
                        "materia": "Diseño de Software",
                        "nota": 3
                    },
                    "hash": "hash3"
                },
                "secondNode": {
                    "data": {
                        "dniAlumno": "35901157",
                        "materia": "Sistemas Operativos",
                        "nota": 4
                    },
                    "hash": "hash4"
                },
                "hash": "hash3-4"
            },
            "hash": "hash1-2-3-4"
        },
        "hash": "hashroot"
    };

    useEffect(() => {

    }, [])

    let html = []

    //Preorden
    const print = (data) => {
        if (typeof (data) !== 'undefined') {
            //console.log(data.hash);
            html.push(<ListGroup.Item>{data.hash}</ListGroup.Item>)
            print(data.firstNode);
            print(data.secondNode);
            if (typeof (data.data) !== 'undefined') {
                //console.log(data.data)
                html.push(<ListGroup.Item><Row><Col>{data.data.dniAlumno}</Col><Col>{data.data.materia}</Col><Col>{data.data.nota}</Col></Row></ListGroup.Item>)
            }

        }

    }

    const tree = (data) => {
        print(data)
        return html;
    }

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
                                    <ListGroup>
                                        {
                                            tree(props.data)
                                        }
                                    </ListGroup>
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