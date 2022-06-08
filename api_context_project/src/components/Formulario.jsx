
import { useState } from 'react';
import '../styles/Formulario.css';
import useCoctel from '../hooks/UseCoctel';

const Formulario = () => {

  const [coctel, setCoctel] = useState('');
  const { setAlerta, getCocteles } = useCoctel();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(coctel === ''){
      setAlerta('Debes indicar el nombre de un coctel');
      return
    }
    getCocteles(coctel);
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='formulario contenedor'
    >
      <div className="campo">
        <label 
          htmlFor="#"
          className="label__coctel"
        >Coctel: 
        </label>
        <input 
          type="text" 
          className="coctel__input"
          name="coctel"
          placeholder='Ingresa un coctel para Buscar'
          onChange={e => setCoctel(e.target.value)}
        />
        <input 
          type="submit" 
          className='btn__coctel'
          value='Buscar'
        />
      </div>
    </form>


  )
}

export default Formulario