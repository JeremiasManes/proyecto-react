import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            <div className='DivCart'>
                {
                    cart.map(prod => (
                        <div className='DivProductCart'>
                            <h3>{prod.name}</h3>
                            <h3>Cantidad: {prod.quantity}</h3>
                            <h3>$ {prod.price}</h3>
                            <h3>Subtotal: </h3>
                            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                        </div>
                    ))
                }
                <h3>Total: {total}</h3>
            </div>
            <div className='DivButtonsCart'>
                <Link to={'/'} className='ButtonsCart'>Volver al Inicio</Link>
                <Link className='ButtonsCart'>Finalizar Compra</Link>
                <button onClick={() => clearCart()}>Limpiar Carrito</button>
            </div>
        </div>
    )


}


export default Cart