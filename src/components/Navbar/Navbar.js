import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
        <nav className='nav'>
            <h1 className='marca'>ICHIRO</h1>
            <div className='categorias'>
                <button>BUZOS</button>
                <button>REMERAS</button>
                <button>ZAPATILLAS</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar