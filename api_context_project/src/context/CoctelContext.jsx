
import { createContext, useState } from 'react';
import axios from 'axios';

const CoctelContext = createContext();

const CoctelProvider = ({children}) => {

    const [ alerta, setAlerta ] = useState('Busca tus cocteles Favoritos');
    const [ coctelReceta, setCoctelReceta ] = useState([]);
    const [ cargando, setCargando ] = useState(false);
    
    
    const getCocteles = async (coctel) => {
        setCargando(true);
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctel}`;
            const { data } = await axios(url);
            setCoctelReceta(data.drinks);
            setAlerta('');
        } catch (error) {
            setAlerta('No se pudo encontrar el coctel que escribiste');
        }

        setTimeout(()=> {
            setCargando(false);
        }, 3000)
    }

    return(
       <CoctelContext.Provider
        value={{
            alerta,
            setAlerta,
            getCocteles,
            coctelReceta,
            cargando
        }}
       >
        {children}
       </CoctelContext.Provider>
    )
}

export {
    CoctelProvider
}
export default CoctelContext;
