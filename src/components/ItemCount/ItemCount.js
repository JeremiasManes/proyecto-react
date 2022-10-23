import './ItemCount.css'
import { useState } from 'react'
import iconoRestar from './assets/iconorestar.png'
import iconoSumar from './assets/iconosumar.png'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <section className='SectionContador'>
            <div className='Contador'>
                <button className='BotonContador' onClick={decrement}><img className='IconoContador' src={iconoRestar} alt='restar' /></button>
                <h3 className='CantidadContador'>{quantity}</h3>
                <button className='BotonContador' onClick={increment}><img className='IconoContador' src={iconoSumar} alt='sumar' /></button>
            </div>
            <button className='BotonAgregar' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </section>
    )
}

export default ItemCount