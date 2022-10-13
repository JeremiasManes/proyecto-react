import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const itemListFilter = categoryId ? getProductsByCategory : getProducts

        itemListFilter(categoryId).then((response) => {
            setProducts(response)
        })
    }, [categoryId])

    return (
        <div>
            <h1 className='titleproducts'>Catalogo</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer