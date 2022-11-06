import { useState, useEffect, createContext } from "react"
import Swal from "sweetalert2"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState()

    useEffect(() => {
        const getQuantity = () => {
            let accu = 0

            cart.forEach(prod => {
                accu += prod.quantity
            })

            return accu
        }

        const totalQty = getQuantity()
        setTotalQuantity(totalQty)

        const total = getTotal()
        setTotal(total)
    }, [cart])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            setCart(
                cart.map((prod) => {
                    return prod.id === productToAdd.id
                        ? { ...prod, quantity: productToAdd.quantity }
                        : prod;
                })
            );
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWhitoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWhitoutProduct)
        Swal.fire('Producto eliminado del carrito.')
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const clearCart = () => {
        Swal.fire('Haz limpiado el carrito.')
        return setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        if (product) {
            return product.quantity
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart, isInCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}