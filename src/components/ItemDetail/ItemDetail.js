import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, img, name, price, description, stock }) => {
    const { addItem } = useContext(CartContext)

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
                <ItemCount stock={stock} onAdd={handleonAdd} />
            </div>
        </div>
    )
}

export default ItemDetail