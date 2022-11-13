import { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import './App.css';
import Blockchain from './components/Blockchain';
import MerckleBlock from './components/MerckleBlock';
import MerckleBlockchain from './components/MerckleBlockchain';
import NewBlockForm from './components/NewBlockForm';
import icon from './img/icon.png';

function App() {

  const [showLinear, setShowLinear] = useState(true)
  const [showMerckle, setShowMerckle] = useState(false)


  const switchMode = () => {
    setShowLinear(!showLinear)
    setShowMerckle(!showMerckle)
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
            Blockchain - Grupo 2
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Button onClick={() => switchMode()}>Lineal/Merckle</Button>
      <div className={showLinear ? '' : 'invisible'}>
        <NewBlockForm />
        <Blockchain />
      </div>
      <div className={showMerckle ? '' : 'invisible'}>
        <NewBlockForm />
        <MerckleBlockchain />
      </div>
    </div>
  );
}

export default App;
