import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const Checkout = () => {

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = () => {
        const objOrder = {
            usuario: {
                Nombre: 'asd',
                Telefono: 'asd',
                Email: 'asd'
            },
            productos: cart,
            total: total
        }

        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef, objOrder).then(response => {
            console.log(response.id)
        })

        clearCart()

    }

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Finalizar Compra</button>
        </div>
    )
}

export default Checkout