
import { useState, useEffect, createContext } from  'react';
import axios from 'axios';

const BebidasContext = createContext();

const BebidasProvider = ({children}) => {

    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [modalFavoritos, setModalFavoritos] = useState(false)

    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)

    const [contadorFavoritos, setContadorFavoritos] = useState(0)
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        setCargando(true)
        const consultarInfoBebida = async () => {
            if(!bebidaId) return //detiene la ejecución del effect

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
    
                const { data } = await axios(url);

                setReceta(data.drinks[0])
                
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false);
            }    
        }
        consultarInfoBebida();
    }, [bebidaId])

    const consultarBebida = async (datos) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.bebida}&c=${datos.categoria}`

            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const handleStateModal = () => {
        setModal(!modal)
    }

    const handleModalFavoritos = () => {
        setModalFavoritos(!modalFavoritos)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }

    const guardarFavorito = (receta) => {
        setFavoritos([
            ...favoritos,
            receta
        ]);
        setContadorFavoritos(contadorFavoritos + 1);
    }

    return(
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleStateModal,
                modal,
                handleBebidaIdClick,
                receta,
                cargando,
                bebidaId,
                contadorFavoritos,
                guardarFavorito,
                favoritos,
                modalFavoritos,
                handleModalFavoritos
            }}
        >   
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider 
}

export default BebidasContext
