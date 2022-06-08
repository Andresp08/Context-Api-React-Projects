
import { Row, Col } from 'react-bootstrap';
import useCategoria from '../hooks/useCategoria'
import CardFood from './CardFood';
import Spinner from './Spinner';


const ResultadoCategoria = () => {

    const { saveFood, cargando } = useCategoria();

    return (
        <>
          {cargando ? <Spinner/> : (
            <Row className='mt-5'>
              {saveFood.map(food => (
                <CardFood
                  key={food.idMeal}
                  food={food}
                />
              ))} 
            </Row>
          )}     
        </>
    )
}

export default ResultadoCategoria