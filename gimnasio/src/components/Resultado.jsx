
import useGym from '../hooks/useGym';
import { useCallback } from 'react';
import { ENTRENO, CIUDAD, PLAN } from '../constants';

const Resultado = () => {

    const { resultado, datos } = useGym();
    const { entreno, ciudad, plan } = datos;

    //convertir los id del helper a info real
    const [_entreno] = useCallback( 
        ENTRENO.filter(entr => entr.id === Number(entreno)),
        [resultado]
    )
    const [_ciudad] =  useCallback(
        CIUDAD.filter(city => city.id === Number(ciudad)),
        [resultado]
    )
    const [_plan] =  useCallback(
        PLAN.filter(pla => pla.id === Number(plan)),
        [resultado]
    )

    if(resultado === 0) return null

    return (
        <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
            <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

            <p className='my-2'>
                <span className='font-bold'>Entrenamiento: </span>
                {_entreno.tipo}
            </p>
            <p className='my-2'>
                <span className='font-bold'>Ciudad: </span>
                {_ciudad.ciudad}
            </p>
            <p className='my-2'>
                <span className='font-bold'>Plan: </span>
                {_plan.plan}
            </p>

            <p className='my-2 text-2xl'>
                <span className='font-bold'>Total Cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado