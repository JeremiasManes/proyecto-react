import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/firestore/products'

const ItemListContainer = () => {

    const { categoryId } = useParams()

    const getProductsFromFirestore = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsFromFirestore, [categoryId])

    if (error) {
        return console.log(error)
    }

    if (loading) {
        return (
            <div className='divLoading'>
                <DotSpinner size={40} speed={0.9} color="black" />
            </div>
        )
    }

    return (
        <div>
            <h1 className='titleproducts'>CATALOGO</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer