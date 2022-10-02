import './Counter.css'
import { useState } from 'react'
import iconoRestar from './assets/iconorestar.png'
import iconoSumar from './assets/iconosumar.png'
import './assets/iconosumar.png'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        if(count > 0){
            setCount(count -1)
        }
    }


    return (
        <section className='SectionContador'>
            <div className='Contador'>
                <button className='BotonContador' onClick={decrement}><img className='IconoContador' src={iconoRestar} alt='restar'/></button>
                <h3 className='CantidadContador'>{count}</h3>
                <button className='BotonContador' onClick={increment}><img className='IconoContador' src={iconoSumar} alt='sumar'/></button>
            </div>
            <button className='BotonAgregar'>Agregar</button>
        </section>
    )
}

export default Counter 