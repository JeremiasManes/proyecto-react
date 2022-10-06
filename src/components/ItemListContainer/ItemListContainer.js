import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts().then((response) =>{ 
            setProducts(response) 
        })
    }, [])

    const productsMapped = products.map(prod => <li>{prod.name}</li>)

    return (
        <div>
            <h1>Catalogo</h1>
            {productsMapped}
        </div>
    )
}

export default ItemListContainer