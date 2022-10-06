const products = [
    {id: '1', name: 'Buzo negro', price: 10000, category: 'Buzos', img: '/images/buzonegro.jpg'},
    {id: '2', name: 'Remera blanca', price: 5000, category: 'Remeras', img: '/images/remerablanca.jpg'},
    {id: '3', name: 'Zapatillas negras', price: 15000, category: 'Zapatillas', img: '/images/zapatillasnegras.jpg'}
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}