import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, img, name, price, description, stock }) => {
    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)

    const handleonAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className="CardProductDetail">
            <img src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <h4>${price}</h4>
                <h4>stock disponible: {stock}</h4>
            </div>
            <div>
                {
                    !isInCart(id)
                        ? <ItemCount stock={stock} initial={productQuantity} onAdd={handleonAdd} />
                        : <div>
                            <ItemCount stock={stock} initial={productQuantity} onAdd={handleonAdd} />
                            <div>
                                <Link to={'/'}>Volver al inicio</Link>
                                <Link to={'/cart'}>Ir al carrito</Link>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default ItemDetail