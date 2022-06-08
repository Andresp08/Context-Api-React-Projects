
import Formulario from './Formulario';
import Alerta from './Alerta';
import ResultadoBusqueda from './ResultadoBusqueda';
import Spinner from './Spinner';
import useLetras from '../hooks/useLetras';

const AppLetras = () => {

    const { alerta, letra, cargando } = useLetras();

    return (
        <>
            <header>
                <h1 className="heading">Busqueda de letras de canciones</h1>
            </header>

            <Formulario />

            <main>
                {alerta ? <Alerta>{alerta}</Alerta> : 
                    letra ? <ResultadoBusqueda/> : 
                    cargando ? <Spinner/> :
                    <p className='text-center'>
                        Busca letras de tus artistas favoritos
                    </p>
                }
            </main>
        </>
    )
}

export default AppLetras