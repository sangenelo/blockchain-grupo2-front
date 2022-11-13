import { useState } from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import './App.css';
import Blockchain from './components/Blockchain';
import MerckleBlockchain from './components/MerckleBlockchain';
import NewBlockForm from './components/NewBlockForm';
import NewMerckleBlockForm from './components/NewMerckleBlockForm';
import icon from './img/icon.png';

function App() {

  const [showLinear, setShowLinear] = useState(true)
  const [showMerckle, setShowMerckle] = useState(false)
  const [actualMode, setActualMode] = useState("Lineal")


  const switchMode = () => {
    setShowLinear(!showLinear)
    setShowMerckle(!showMerckle)
    if(actualMode==="Lineal"){
      setActualMode("Merkle")
    }else{
      setActualMode("Lineal")
    }
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Actas Blockchain - Grupo 2
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row className='gx-0 mt-2'>
        <Col className='d-flex justify-content-end p-1'>
          <h4>Modo: {actualMode}</h4>
        </Col>
        <Col className='d-flex justify-content-start p-1'>
          <Button variant="dark" onClick={() => switchMode()}>Cambiar a {actualMode === "Lineal" ? "Merkle" : "Lineal"}</Button>
        </Col>
      </Row>
      
      <div className={showLinear ? '' : 'invisible'}>
        <NewBlockForm />
        <Blockchain />
      </div>
      <div className={showMerckle ? '' : 'invisible'}>
        <NewMerckleBlockForm />
        <MerckleBlockchain />
      </div>
    </div>
  );
}

export default App;
