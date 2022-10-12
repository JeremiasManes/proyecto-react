import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = (id) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductById('3').then((response) => {
            setProduct(response);
        })
    }, [])

    return (
        <div>
            <ItemDetail product={product} key={id} {...product} />
        </div>
    )

}

export default ItemDetailContainer