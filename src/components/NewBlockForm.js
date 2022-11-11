
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function NewBlockForm(props) {

    const [dniAlumno, setDniAlumno] = useState()
    const [materia, setMateria] = useState()
    const [nota, setNota] = useState()
    const [block, setBlock] = useState([])

    const saveRecord = async (event) => {
        event.preventDefault();
        console.log("DNI: " + dniAlumno + " Materia: " + materia + " Nota: " + nota)
        const record = {
            dniAlumno: dniAlumno,
            materia: materia,
            nota: nota
        }
        setBlock(current => [...current, record]);
    }

    const saveTransaction = async (event) => {
        event.preventDefault();
        
        axios
            .post("http://localhost:8080/blocks/transaction", block)
            .then((response) => {
                if (response.status !== 200) {
                    toast.error('No se pudo añadir el bloque.', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    return
                }
                toast.success('Bloque añadido correctamente.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                setBlock([])
                console.log("Transacción registrada");
            })
            .catch((error) => console.log(error.message));
    }

    return (
        <>
            <Row className="d-flex text-center gx-0 justify-content-around align-items-center mt-4">
                <Col xs={5} className="p-2">
                    <Card className="shadow">
                        <Card.Header><h4>Agregar Registro</h4></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formDNI">
                                    <Form.Label>DNI Alumno</Form.Label>
                                    <Form.Control type="number" placeholder="Ingrese el DNI del alumno" onChange={(e) => setDniAlumno(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="fromMateria">
                                    <Form.Label>Materia</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese nombre de la materia" onChange={(e) => setMateria(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formNota">
                                    <Form.Label>Nota</Form.Label>
                                    <Form.Control type="number" placeholder="Ingrese la nota" onChange={(e) => setNota(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={(e) => saveRecord(e)}>
                                    Agregar Registro
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={5}>
                    <Card className="shadow">
                        <Card.Header><h4>Bloque</h4></Card.Header>
                        <Card.Body>
                            {
                                block.map((lineItem, index) =>


                                    <ListGroup horizontal key={index} className="mt-2">
                                        <ListGroup.Item className="flex-fill"><strong>DNI:</strong> {lineItem.dniAlumno}</ListGroup.Item>
                                        <ListGroup.Item className="flex-fill"><strong>Materia:</strong> {lineItem.materia}</ListGroup.Item>
                                        <ListGroup.Item className="flex-fill"><strong>Nota:</strong> {lineItem.nota}</ListGroup.Item>
                                    </ListGroup>
                                )
                            }
                            <Button variant="primary" type="submit" onClick={(e) => saveTransaction(e)} className="mt-3">
                                Agregar Bloque
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <ToastContainer />
            </Row>

        </>
    )

}

export default NewBlockForm;