import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, img, name, category, price }) => {
    return (
        <div className="cartproduct">
            <img src={img} alt={name} />
            <div className='textproduct'>
                <h1 className='margintext'>{name}</h1>
                <h3 className='margintext'>{category}</h3>
                <h4 className='margintext'>${price}</h4>
                <Link to={`/detail/${id}`} className='buttoncartproduct'>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item