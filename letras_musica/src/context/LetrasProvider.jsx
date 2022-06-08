
import { useState, createContext } from 'react';
import axios from 'axios';

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {
    /*dos corchetes, uno para indicar que es JS y otro para un objeto*/

    const [alerta, setAlerta] = useState('');
    const [letra, setLetra] = useState('');
    const [cargando, setCargando ] = useState(false);

    const busquedaLetra = async (busqueda) => {
        setCargando(true);
        const {artista, cancion} = busqueda;

        try {
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const { data } = await axios(url);
            setLetra(data.lyrics)
            setAlerta('');
        } catch (error) {
            setAlerta('No se puedo encontrar tu canción, revisa los datos que colocaste');
        }
        setCargando(false);
    }

    return(
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                busquedaLetra,
                letra,
                cargando
            }}  
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext;

