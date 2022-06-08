
import { Row } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas';
import Favoritos from './Favoritos';

const ListadoFavoritos = () => {
    
    const { favoritos } = useBebidas();

    return (
        <Row className='mt-5'>
            {favoritos.map(favoritos => (
                <Favoritos
                    key={favoritos.idDrink}
                    favoritos={favoritos}
                >
                </Favoritos>
            ))}
        </Row>
    )
}

export default ListadoFavoritos