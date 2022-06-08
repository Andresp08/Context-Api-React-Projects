
import Coctel_Izq from '../assets/Coctel_Izq.png';
import Coctel_Der from '../assets/Coctel_Der.png';
import '../styles/Header.css';

const Header = () => {

  return (
    <header className="header">
        <div className="grid contenedor">
          <img src={Coctel_Izq} alt="coctel izq" />
          <div className="informacion">
              <h1 className='titulo'>Coctel Información Api</h1>
              <p className='texto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, vitae fugit fugiat recusandae ratione, dolorum repellat harum accusantium nesciunt consequatur, totam necessitatibus nam! Optio facere sit sint ex fugiat nam?</p>
          </div>
          <img src={Coctel_Der} alt="coctel derecha" />
        </div>
    </header>
  )
}

export default Header