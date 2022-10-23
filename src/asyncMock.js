const products = [
    { id: '1', name: 'Buzo negro', price: 10000, category: 'buzos', img: '/images/buzonegro.jpg', description: 'Un buzo que combina con todo, 100% algodon.', stock: '3' },
    { id: '2', name: 'Remera blanca', price: 5000, category: 'remeras', img: '/images/remerablanca.jpg', description: 'Una remera especial para la llegada del calor.', stock: '5' },
    { id: '3', name: 'Zapatillas blancas', price: 15000, category: 'zapatillas', img: '/images/zapatillasblancas.jpg', description: 'Unas zapatillas blancas muy facheras e infaltables en tu coleccion.', stock: '2' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        })
    })
}