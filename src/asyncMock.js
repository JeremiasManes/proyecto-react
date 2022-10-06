const products = [
    {id: '1', name: 'Remera blanca', price: 5000, category: 'Remeras', img: ''},
    {id: '2', name: 'Buzo negro', price: 10000, category: 'Buzos', img: ''},
    {id: '3', name: 'Zapatillas negras', price: 15000, category: 'Zapatillas', img: ''}
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 1000)   
    })
}