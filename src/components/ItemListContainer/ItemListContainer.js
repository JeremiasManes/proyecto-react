import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response)
        })
    }, [])

    return (
        <div>
            <h1>Catalogo</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer