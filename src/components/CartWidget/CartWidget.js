import './CartWidget.css'
import IconoCarrito from './assets/IconoCarrito.jpg'

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <img src={IconoCarrito} alt='icono' className='iconoCarrito' />
            <h3>0</h3>
        </div>
    )
}

export default CartWidget