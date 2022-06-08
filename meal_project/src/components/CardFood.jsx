
import { Card, Col, Row } from 'react-bootstrap'
import useCategoria from '../hooks/useCategoria'

const CardFood = ({food}) => {
    return (
        <Col md={6} lg={3}>
            <Card className='mb-3'>
                <Card.Img 
                    variant='top'
                    src={food.strMealThumb}
                    alt={`Imagen de ${food.strMeal}`}
                />
                <Card.Body>
                    <Card.Title>{food.strMeal}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardFood