
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategoriasProvider } from './context/CategoriaProvider'
import { BebidasProvider } from './context/BebidasProvider'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import ModalFavorito from './components/ModalFavorito'


function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas </h1>
        </header>

        <Container className='mt-5'>
          <ModalFavorito />
          <Formulario />

          <ListadoBebidas/>

          <ModalBebida/>
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
