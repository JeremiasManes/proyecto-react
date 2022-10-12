import './Item.css'

const Item = ({ img, name, category, price }) => {
    return (
        <div className="cartproduct">
            <img src={img} alt={name} />
            <div className='textproduct'>
                <h1 className='margintext'>{name}</h1>
                <h3 className='margintext'>{category}</h3>
                <h4 className='margintext'>${price}</h4>
            </div>
        </div>
    )
}

export default Item