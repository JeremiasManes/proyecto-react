import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='nav'>
            <Link to={'/'}><h1 className='marca'>ICHIRO</h1></Link>
            <div className='categorias'>
                <Link to={'/category/buzos'}>BUZOS</Link>
                <Link to={'/category/remeras'}>REMERAS</Link>
                <Link to={'/category/zapatillas'}>ZAPATILLAS</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar