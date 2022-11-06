import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'
import './ItemDetailContainer.css'
import { getProduct } from "../../services/firestore/product"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

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