
import { useCallback, useMemo, useRef } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, PLANES } from '../constants';

const Resultado = () => {

    const { resultado, datos } = useCotizador();
    const { marca, year, plan  } = datos;
    
    //evitar reRender year
    const yearRef = useRef(year);

    //Filtrar por la marca seleccionada
    const [nombreMarca] = useMemo( () =>
        MARCAS.filter(m => m.id === Number(marca)),
        [resultado]
    );

    const [tipoPlan] = useCallback( 
        PLANES.filter(pl => pl.id === Number(plan)),
        [resultado]
    );

    if(resultado === 0) return null

    return (
        <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
            <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

            <p className='my-2'>
                <span className='font-bold'>Marca: </span>
                {nombreMarca.nombre}
            </p>
            <p className='my-2'>
                <span className='font-bold'>Plan: </span>
                {tipoPlan.nombre}
            </p>
            <p className='my-2'>
                <span className='font-bold'>Año del auto: </span>
                {yearRef.current}
            </p>

            <p className='my-2 text-2xl'>
                <span className='font-bold'>Total Cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado