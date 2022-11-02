import { useState, useEffect, createContext } from "react"

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
    }, [cart])

    useEffect(() => {
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
            console.log("ya esta en el carrito");
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWhitoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWhitoutProduct)
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const clearCart = () => {
        return setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}