import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/index'

export const getProduct = (productId) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            resolve(productAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}