import './CartContainer.css'
import CartDetail from '../CartDetail/CartDetail'
import { Link } from 'react-router-dom'

const CartContainer = () =>{

    return(
        <section className='SectionCart'>
            <CartDetail />
            <div className='ContenedorBotonesCart'>
                <Link to={'/'} className='BotonesCart'>Volver al inicio</Link>
                <Link className='BotonesCart'>Finalizar compra</Link>
            </div>
        </section>
    )
}

export default CartContainer