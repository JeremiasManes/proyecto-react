import Counter from '../Counter/Counter'
import './ItemDetail.css'


const ItemDetail = ({ id, img, name, price, description, stock }) => {
    const handleonAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

    return (
        <div className="CardProductDetail">
            <img src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <h4>${price}</h4>
                <h4>stock disponible: {stock}</h4>
                <Counter stock={stock} onAdd={handleonAdd} />
            </div>
        </div>
    )
}

export default ItemDetail