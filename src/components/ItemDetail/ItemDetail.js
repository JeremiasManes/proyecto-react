import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, img, name, price, description, stock }) => {
    const { addItem, isInCart } = useContext(CartContext)

    const handleonAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
    }

    return (
        <div className="CardProductDetail">
            <img src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <h4>${price}</h4>
                <h4>stock disponible: {stock}</h4>
                <div>
                    {
                        !isInCart(id)
                            ? <ItemCount stock={stock} onAdd={handleonAdd} />
                            : <Link to='/cart'>Ir al carrito</Link>
                    }
                    <Link to='/'>Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail