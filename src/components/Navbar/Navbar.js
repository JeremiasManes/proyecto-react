import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='nav'>
            <Link to={'/'} className='marca'>ICHIRO</Link>
            <div className='divcategorias'>
                <NavLink to={'/category/buzos'} className={({ isActive }) => (isActive ? 'categoriasActive' : 'categorias')}>BUZOS</NavLink>
                <NavLink to={'/category/remeras'} className={({ isActive }) => (isActive ? 'categoriasActive' : 'categorias')}>REMERAS</NavLink>
                <NavLink to={'/category/zapatillas'} className={({ isActive }) => (isActive ? 'categoriasActive' : 'categorias')}>ZAPATILLAS</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar