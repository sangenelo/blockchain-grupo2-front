import React, { useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MerckleModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let html = []

    //Preorden
    const print = (data) => {
        if (typeof (data) !== 'undefined') {
            //console.log(data.hash);
            html.push(<ListGroup.Item><strong>Hash nodo: </strong><small>{data.hash}</small></ListGroup.Item>)
            print(data.firstNode);
            print(data.secondNode);
            if (typeof (data.data) !== 'undefined') {
                //console.log(data.data)
                html.push(
                <ListGroup.Item><strong>Contenido: </strong>
                    <ListGroup horizontal className="mt-2">
                        <ListGroup.Item className="flex-fill"><small><strong>DNI:</strong> {data.data.dniAlumno}</small></ListGroup.Item>
                        <ListGroup.Item className="flex-fill"><small><strong>Materia:</strong> {data.data.materia}</small></ListGroup.Item>
                        <ListGroup.Item className="flex-fill"><small><strong>Nota:</strong> {data.data.nota}</small></ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>
                )
            }

        }

    }

    const tree = (data) => {
        print(data)
        return html;
    }

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                Ver registros
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Registros</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col>
                            <h4>Contenido del árbol</h4>
                            <small><span className='text-muted'>Recorrido en Preorden</span></small>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <ListGroup>
                                {
                                    tree(props.block)
                                }
                            </ListGroup>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MerckleModal;