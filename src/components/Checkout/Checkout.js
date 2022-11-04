import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useState } from "react"

const Checkout = () => {

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleChange1 = event => {
        return (
            setNombre(event.target.value)
        )
    }

    const handleChange2 = event => {
        return (
            setTelefono(event.target.value)
        )
    }

    const handleChange3 = event => {
        return (
            setEmail(event.target.value)
        )
    }

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = () => {
        const objOrder = {
            usuario: {
                Nombre: nombre,
                Telefono: telefono,
                Email: email
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
            <form>
                <input onChange={handleChange1}></input>
                <input onChange={handleChange2}></input>
                <input onChange={handleChange3}></input>
            </form>
            <button onClick={createOrder}>Finalizar Compra</button>
        </div>
    )
}

export default Checkout