
import { Row, Col, Container }  from 'react-bootstrap';
import { CategoriaProvider } from './context/CategoriaProvider'
import useCategoria from './hooks/useCategoria';
import Categorias from './components/Categorias'
import ResultadoCategoria from './components/ResultadoCategoria'
import Spinner from './components/Spinner';

function App() {

    return (
      <CategoriaProvider>
        <header className="py-5">
            <h1 className="text-center">The Meal DB Project</h1>
        </header>

        <Container className='mt-5'>
          <Row className='d-flex justify-content-center'>
              <Categorias/>
              <ResultadoCategoria/>
          </Row>
        </Container>
      </CategoriaProvider>
    )
}

export default App
