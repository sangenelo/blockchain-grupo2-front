
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function NewBlockForm(props) {

    const [sender, setSender] = useState()
    const [receiver, setReceiver] = useState()
    const [amount, setAmount] = useState()

    const saveTransaction = async (event) => {
        event.preventDefault();
        console.log("Sender: " + sender + " Receiver: " + receiver + " Monto: " + amount)
        const data = {
            sender: sender,
            receiver: receiver,
            amount: amount
        }
        axios
            .post("http://localhost:8080/blocks/transaction", data)
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
                console.log("Transacción registrada");
            })
            .catch((error) => console.log(error.message));
    }

    return (
        <>
            <Row className="d-flex flex-column text-center gx-0 justify-content-center align-items-center">
                <Col xs={6} className="p-2">
                    <Card className="shadow">
                        <Card.Header><h4>Agregar Bloque</h4></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formSender">
                                    <Form.Label>Origen</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese nombre de quien envía" onChange={(e) => setSender(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formReceiver">
                                    <Form.Label>Destinatario</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese nombre de quien recibe" onChange={(e) => setReceiver(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formAmount">
                                    <Form.Label>Monto</Form.Label>
                                    <Form.Control type="number" placeholder="Ingrese el monto" onChange={(e) => setAmount(e.target.value)} />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={(e) => saveTransaction(e)}>
                                    Registrar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
                <ToastContainer />
            </Row>

        </>
    )

}

export default NewBlockForm;