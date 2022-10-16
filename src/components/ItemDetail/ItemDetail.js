import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({ img, name, price, description, stock }) => {
    const handleonAdd = () => {
        alert("Se agrego al carrito")
    }

    return (
        <div className="CardProductDetail">
            <img src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <h4>${price}</h4>
                <h4>stock disponible: {stock}</h4>
                <ItemCount stock={stock} onAdd={handleonAdd} />
            </div>
        </div>
    )
}

export default ItemDetail