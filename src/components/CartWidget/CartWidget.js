import './CartWidget.css'
import IconoCarrito from './assets/IconoCarrito.jpg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (

        <Link to={'/cart'} className='cartWidget'>
            <img src={IconoCarrito} alt='icono' />
            <h3>{totalQuantity}</h3>
        </Link>

    )
}

export default CartWidget