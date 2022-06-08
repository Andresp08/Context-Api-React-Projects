
import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {

    const { handleStateModal, handleBebidaIdClick } = useBebidas();

    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img 
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />
                <Card.Body className='text-center fw-bold'>
                    <Card.Title>{bebida.strDrink}</Card.Title>

                    <Button
                        variant='warning'
                        className='w-100 text-center fw-bold text-uppercase mt-2'
                        onClick={ () => {
                            handleStateModal()
                            handleBebidaIdClick(bebida.idDrink)
                        }}
                    >
                    Ver Bebida</Button>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida