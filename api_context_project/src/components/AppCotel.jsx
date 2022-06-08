
import UseCoctel from '../hooks/UseCoctel';
import Alerta from './Alerta';
import Formulario from './Formulario';
import Header from './Header';
import ResultadoCoctel from './ResultadoCoctel';
import Spinner from './Spinner';

const AppCotel = () => {

    const { alerta, coctelReceta, cargando } = UseCoctel();

    return (
      <>
        <Header />
        <Formulario/>
        
        <main>
          { alerta ? <Alerta>{alerta}</Alerta> : 
            coctelReceta ? <ResultadoCoctel/> :
            cargando && <Spinner/>  
          }
        </main>

      </>
    )
}

export default AppCotel;