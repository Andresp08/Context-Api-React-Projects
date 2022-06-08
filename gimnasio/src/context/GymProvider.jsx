
import { useState, createContext } from 'react';
import { formatearDinero } from '../helpers';

const GymContext = createContext();

const GymProvider = ({children}) => {

    const [datos, setDatos] = useState({
        entreno: '',
        ciudad: '',
        plan: ''
    })

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarGym = () => {
        
        let result = formatearDinero(45000);
        setCargando(true);

        setTimeout(() => {
            setResultado(result);
            setCargando(false);
        }, 3000);
    }

    return(
        <GymContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarGym,
                resultado,
                cargando
            }}
        >
            {children}
        </GymContext.Provider>
    )
}

export {
    GymProvider
}

export default GymContext;