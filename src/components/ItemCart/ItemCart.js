import './ItemCart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <div className='DivProductCart'>
            {
                cart.map(prod => (
                    <div className='DivProductCart' key={prod.id}>
                        <h3>{prod.name}</h3>
                        <h3>Cantidad: {prod.quantity}</h3>
                        <h3>Precio x unidad : $ {prod.price}</h3>
                        <h3>Subtotal: $ {prod.quantity * prod.price}</h3>
                        <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemCart