import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {

    const { total, clearCart } = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            <div className='DivCart'>
                <ItemCart />
            </div>
            <h3>Total: {total}</h3>
            <div className='DivButtonsCart'>
                <Link to={'/'} className='ButtonsCart'>Volver al Inicio</Link>
                <Link className='ButtonsCart'>Finalizar Compra</Link>
                <button onClick={() => clearCart()}>Limpiar Carrito</button>
            </div>
        </div>
    )
}


export default Cart