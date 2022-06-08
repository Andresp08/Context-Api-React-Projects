
import { ENTRENO, CIUDAD, PLAN } from '../constants';
import { Fragment } from 'react';
import useGym from '../hooks/useGym';
import Error from './Error';

const Formulario = () => {

    //extraer context 
    const { datos, handleChangeDatos, error, setError, cotizarGym } = useGym();

    const handleSubmit = e => {
        e.preventDefault();
        
        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios');
            return
        }

        setError('');

        cotizarGym();
    }

    return (

        <>
        
            {error && <Error/>}

            <form
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label 
                        htmlFor="#" 
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >Tipo de Entrenamiento</label>
                    <select 
                        name="entreno" 
                        className="w-full p-3 bg-white border border-gray-400"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.entreno}
                    >
                        <option value="">--Selecciona Tipo Entreno --</option>

                        {ENTRENO.map(entreno => (
                            <option
                                key={entreno.id}
                                value={entreno.id}
                            >
                                {entreno.tipo}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label 
                        htmlFor="#" 
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >Ciudad</label>
                    <select 
                        name="ciudad" 
                        className="w-full p-3 bg-white border border-gray-400"
                        onChange={e=> handleChangeDatos(e)}
                        value={datos.ciudad}
                    >
                        <option value="">--Selecciona la Ciudad--</option>
                        {CIUDAD.map(city => (
                            <option
                                key={city.id}
                                value={city.id}
                            >
                                {city.ciudad}
                            </option>
                        ))}
                            
                    </select>

                </div>

                <div className="my-5">
                    <label 
                        htmlFor="#" 
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >Tipo plan</label>
                    <div className="flex gap-3 items-center">
                        {PLAN.map(tipo => (
                            <Fragment key={tipo.id}>
                                <label htmlFor="#">{tipo.plan}</label>

                                <input 
                                    type="radio" 
                                    name='plan'
                                    value={tipo.id}
                                    onChange={e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input 
                    type="submit" 
                    className='w-full bg-orange-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
                    value='Calcular'
                />
            </form>
        </>
    )
}

export default Formulario