import { Container, Navbar } from 'react-bootstrap';
import './App.css';
import Blockchain from './components/Blockchain';
import NewBlockForm from './components/NewBlockForm';
import icon from './img/icon.png';

function App() {

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
      <NewBlockForm />
      <Blockchain />
    </div>
  );
}

export default App;
