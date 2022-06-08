
import axios from 'axios';
import { createContext, useState, useEffect } from 'react'

const CategoriaContext = createContext();

const CategoriaProvider = ({children}) => {

    const [getCategories, setGetCategories] = useState([])
    const [saveFood, setSaveFood] = useState([])
    const [cargando, setCargando] = useState(false)

    const obtenerCategorias = async () => {
        try {
            const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

            const { data } = await axios(url);
            setGetCategories(data.meals)
        } catch (error) {
            console.log(error)
        }
    }

        
    useEffect(() => {
        obtenerCategorias()
    }, [])


    const buscarInfoCategoria = async (categoria) => {
        setCargando(true)
        try {
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

            const { data } = await axios(url)
            setSaveFood(data.meals)
        } catch (error) {
            console.log(error)
        } finally{
            setCargando(false)
        }
    }

    return (
        <CategoriaContext.Provider
            value={{
                getCategories,
                buscarInfoCategoria,
                saveFood,
                cargando
            }}
        > 
        {children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaContext

export {
    CategoriaProvider
}

