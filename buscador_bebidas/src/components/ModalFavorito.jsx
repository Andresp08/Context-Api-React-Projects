
import { Modal, Image, Button, Col } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import ListadoFavoritos from './ListadoFavoritos'

const ModalFavorito = () => {

    const { modalFavoritos, handleModalFavoritos, favoritos } = useBebidas();


    return (
        <Modal show={modalFavoritos}  dialogClassName="modal-90w" onHide={handleModalFavoritos}>
            <Modal.Header closeButton>
                <Modal.Title>Tus Recetas Favoritas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {favoritos.length ? <ListadoFavoritos /> :  <h6 className='text-center'>No hay favoritos, agrega uno y revisalo cuando quieras</h6> }
            </Modal.Body>
        </Modal>
    )
}

export default ModalFavorito