import './CartWidget.css'
import IconoCarrito from './assets/IconoCarrito.jpg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <div className='cartWidget'>
            <img src={IconoCarrito} alt='icono' className='iconoCarrito' />
            <h3>{totalQuantity}</h3>
        </div>
    )
}

export default CartWidget