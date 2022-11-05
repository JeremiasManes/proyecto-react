import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {

    const { cart, total, clearCart } = useContext(CartContext)

    if (cart.length !== 0) {
        return (
            <div>
                <h1 className='titleCart'>Carrito</h1>
                <div className='DivCart'>
                    <ItemCart />
                </div>
                <div>
                    <h3>Total: $ {total}</h3>
                    <button className='ButtonsCart' onClick={() => clearCart()}>Limpiar Carrito</button>
                </div>

                <div className='DivButtonsCart'>
                    <Link to={'/'} className='ButtonsCart'>Volver al Inicio</Link>
                    <Link to={'/checkout'} className='ButtonsCart'>Finalizar Compra</Link>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className='titleCart'>Carrito</h1>
                <h2>El Carrito se encuentra vacío</h2>
                <Link to={'/'} className='ButtonsCart'>Volver al Inicio</Link>
            </div>
        )
    }


}


export default Cart