import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ id, img, name, price, description, stock }) => {
    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)

    const handleonAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        Swal.fire('Producto añadido al carrito.')
    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className="CardProductDetail">
            <img src={img} alt={name} />
            <div className='divCardDetail'>
                <h1>{name}</h1>
                <p>{description}</p>
                <h4>${price}</h4>
                <h4>stock disponible: {stock}</h4>
                {stock !== 0 ? <ItemCount stock={stock} initial={productQuantity} onAdd={handleonAdd} /> : <h3>No hay stock</h3>}
                {isInCart(id) && <Link to={'/cart'} className='goCart'>Ir al carrito</Link>}
            </div>
        </div>
    )
}

export default ItemDetail