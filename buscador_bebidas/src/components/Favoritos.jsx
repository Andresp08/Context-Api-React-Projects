
import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas';

const Favoritos = ({favoritos}) => {

    const { handleStateModal, handleBebidaIdClick } = useBebidas();

    return (
        <Col  md={3} lg={6}>
            <Card className='mb-4'>
                <Card.Img 
                    variant='top'
                    src={favoritos.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />
                <Card.Body className='text-center fw-bold'>
                    <Card.Title>{favoritos.strDrink}</Card.Title>

                    <Button
                        variant='warning'
                        className='w-100 text-center fw-bold text-uppercase mt-2'
                        onClick={ () => {
                            handleStateModal()
                            handleBebidaIdClick(favoritos.idDrink)
                        }}
                    >
                    Ver Bebida</Button>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Favoritos