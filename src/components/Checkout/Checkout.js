import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, getDocs, query, where, writeBatch, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Checkout.css'
import Swal from "sweetalert2"

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

    const navigate = useNavigate()

    const createOrder = async () => {
        try {
            const objOrder = {
                usuario: {
                    Nombre: nombre,
                    Telefono: telefono,
                    Email: email
                },
                productos: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                Swal.fire(
                    'Orden generada, seras redirigido al inicio.',
                    `id compra: ${orderAdded.id}`
                )

                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                Swal.fire('Stock no disponible.')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='divCheckout'>
            <h1 className='titleCheckout'>Checkout</h1>
            <div className='divformCheckout'>
                <h2 className='titleCheckout'>Formulario</h2>
                <form className='formCheckout'>
                    <h3>Nombre</h3>
                    <input className='inputForm' onChange={handleChange1}></input>
                    <h3>Telefono</h3>
                    <input className='inputForm' onChange={handleChange2}></input>
                    <h3>E-mail</h3>
                    <input className='inputForm' onChange={handleChange3}></input>
                </form>
            </div>
            <button className='buttonCheckout' onClick={createOrder}>Finalizar Compra</button>
        </div>
    )
}

export default Checkout