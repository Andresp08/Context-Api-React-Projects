
import useCoctel from '../hooks/UseCoctel';
import Spinner from './Spinner';
import '../styles/ResultadoCoctel.css';

const ResultadoCoctel = () => {

    const { coctelReceta, cargando } = useCoctel();

    return (
        cargando ? <Spinner/> : (
            <div className=' contenedor grid-coctel'> 
                {coctelReceta.map(receta => (
                    <article 
                        key={receta.idDrink}
                    >
                        <div className="recet">
                            <img src={receta.strDrinkThumb} alt="receta"/>

                            <div className="ingrendients">
                                <h2 className='preparacion:'>Preparación: </h2>
                                <p className='instrucciones'>{receta.strInstructions}</p>
                                <ul className='lista'>
                                    <h2 className='lista__heading'>Ingredients</h2>
                                    <li>{receta.strIngredient1}</li>
                                    <li>{receta.strIngredient2}</li>
                                    <li>{receta.strIngredient3}</li>
                                    <li>{receta.strIngredient4}</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        )
    )
}

export default ResultadoCoctel