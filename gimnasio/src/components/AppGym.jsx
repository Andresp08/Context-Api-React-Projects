

import useGym from '../hooks/useGym';
import Formulario from './Formulario';
import Resultado from './Resultado';
import Spinner from './Spinner';

const AppGym = () => {

    const { cargando } = useGym();

    return (

        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">Cotizador de días de Gym</h1>
            </header>
            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Formulario />
                { cargando ? <Spinner /> : <Resultado />}
            </main>
        </>
        

    )
}

export default AppGym