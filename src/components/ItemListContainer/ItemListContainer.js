import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { DotSpinner } from '@uiball/loaders'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        getDocs(collectionRef).then((response) => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()

                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)
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