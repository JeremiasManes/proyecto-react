import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { getProducts } from '../../services/firestore/products'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])



    if (loading) {
        return (
            <div className='divLoading'>
                <DotSpinner size={40} speed={0.9} color="black" />
            </div>
        )
    }

    return (
        <div>
            <h1 className='titleproducts'>Catalogo</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer