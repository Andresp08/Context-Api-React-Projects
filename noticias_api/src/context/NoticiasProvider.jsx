
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const NoticiasContext = createContext();

const NoticasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('sports');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(() => {
        const getNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${import.meta.env.VITE_APY_KEY}`;

            const { data } = await axios(url);
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1)
        }
        getNews();
    }, [categoria])

    useEffect(() => {
        const getNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_APY_KEY}`;

            const { data } = await axios(url);
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        getNews();
    }, [pagina])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }

    return(
        <NoticiasContext.Provider
            value={{
                categoria, 
                handleChangeCategoria,
                noticias, 
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticasProvider
}

export default NoticiasContext;

