import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className='nav'>
            <h1 className='marca'>ICHIRO</h1>
            <div className='categorias'>
                <button>BUZOS</button>
                <button>REMERAS</button>
                <button>ZAPATILLAS</button>
            </div>
        </nav>
    )
}

export default Navbar