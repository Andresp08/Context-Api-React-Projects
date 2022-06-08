
import { useState } from 'react';
import { Button, Form, Row, Col, Alert, Badge } from 'react-bootstrap'
import { BsStar } from 'react-icons/bs';
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        bebida: '',
        categoria: ''
    })

    const [alerta, setAlerta] = useState('');

    const { categorias } = useCategorias();
    const { consultarBebida, contadorFavoritos, handleModalFavoritos } = useBebidas();

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')
        consultarBebida(busqueda);
    }

    return(
        <Form
            onSubmit={handleSubmit}
        >

            {alerta && <Alert 
                variant='danger'
                className='text-center text-danger text-uppercase fs-6 fw-bold'>
                    {alerta}
                </Alert> 
            }

            <Row>
                <Col md={12} className='d-flex justify-content-end align-items-center mb-4'>
                    <Button variant="danger"
                        onClick={ () => {
                            handleModalFavoritos()
                        }}
                    >
                        Favoritos <BsStar /> <Badge bg="dark">{contadorFavoritos}</Badge>
                        <span className="visually-hidden">Favoritos</span>
                    </Button>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='bebida'>Nombre Bebida:</Form.Label>
                        <Form.Control 
                            id='bebida'
                            type='text'
                            placeholder='Ej: Tequila, vodka, etc'
                            name='bebida'
                            value={busqueda.bebida}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria'>Categoría Bebida:</Form.Label>
                        <Form.Select
                            id='categoria'
                            name='categoria'
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option value="">-Selecciona Categoria-</option>
                            {categorias.map(categoria => (
                                <option 
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >{categoria.strCategory}</option>
                            ))}
                            
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                        type='submit'
                    >Buscar Bebidas</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario