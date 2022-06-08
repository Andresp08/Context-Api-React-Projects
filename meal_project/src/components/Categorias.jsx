
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import useCategoria from '../hooks/useCategoria';

const Categorias = () => {

    const [categorieSelected, setCategorieSelected] = useState('')
    const { getCategories, buscarInfoCategoria } = useCategoria();
    const [ alerta, setAlerta ] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        if(categorieSelected === ''){
            setAlerta('Debes escoger una categoría para continuar')
            return
        }

        setAlerta('')
        buscarInfoCategoria(categorieSelected);
    }

    return (
        <>
            <h6 className='mb-4 text-center'>Busqueda por tu categoría favorita para concer más!</h6>
            <Col md={6}>

            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
            <Form
                onSubmit={handleSubmit}
            >
                <Form.Label htmlFor='categoria'>Selecciona la categoría:</Form.Label>

                <Form.Select
                    id='categoria'
                    name='categoria'
                    value={categorieSelected}
                    onChange={e => setCategorieSelected(e.target.value)}
                >
                    <option value="">-Selecciona Categoria-</option>
                    {getCategories.map(categories => (
                        <option 
                            key={categories.strCategory}
                            value={categories.strCategory}
                        >{categories.strCategory}</option>
                    ))}
                </Form.Select>
                <Row>
                    <Col className='mt-3 d-flex justify-content-end'>
                        <Button
                            variant='danger'
                            className='text-uppercase'
                            type='submit'
                        >
                            Consultar
                        </Button>
                    </Col>
                </Row>        
            </Form>
            </Col>
        </>
    )
}

export default Categorias