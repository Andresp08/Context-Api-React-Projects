
import Spinner from './Spinner';
import useLetras from '../hooks/useLetras';

const ResultadoBusqueda = () => {

    const { letra, cargando } = useLetras();

    return (
        cargando ? <Spinner/> :  <p className='letra'>{letra}</p>
    )
}

export default ResultadoBusqueda