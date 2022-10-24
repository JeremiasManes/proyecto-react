import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { DotSpinner } from '@uiball/loaders'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
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