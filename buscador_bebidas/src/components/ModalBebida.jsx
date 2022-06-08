
import { useState } from 'react'
import { Modal, Image, Button, Col } from 'react-bootstrap'
import { BsStar } from 'react-icons/bs';
import useBebidas from '../hooks/useBebidas';

const ModalBebida = () => {

    const { modal, handleStateModal , receta, cargando, guardarFavorito } = useBebidas();

    const [ nombreBoton, setNombreBoton ] = useState('Añadir a Favoritos');

    const mostrarIngredientes = () => {
        let ingredientes = [];

        for(let i = 1; i < 16; i++){
            if(receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li
                        key={i}
                    >   
                        {receta[`strIngredient${i}`]}
                        {receta[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleStateModal}>
                <Image 
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.srtDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instrucciones: </h2>
                        {receta.strInstructions}
                        <h2>Ingredientes y Cantidad</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Col
                        className='d-flex justify-content-center align-items-center'
                    >
                        <Button
                            variant='warning'
                            className='text-center'
                            onClick={ () => {
                                guardarFavorito(receta),
                                setNombreBoton('Receta Añadida')
                            }}
                        >
                            {nombreBoton} <BsStar/>
                        </Button>
                    </Col>
                </Modal.Footer>
            </Modal>)
    )
}

export default ModalBebida