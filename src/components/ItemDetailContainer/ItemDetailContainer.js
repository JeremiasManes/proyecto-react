import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'
import { getProduct } from "../../services/firestore/product"
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = () => {

    const { productId } = useParams()

    const getProductFromFirestore = () => getProduct(productId)

    const { data: product, error, loading } = useAsync(getProductFromFirestore)

    if (error) {
        console.log(error)
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
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer