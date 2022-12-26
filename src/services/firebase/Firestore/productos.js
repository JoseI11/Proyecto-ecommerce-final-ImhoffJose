import { getDocs, collection, query, where, orderBy, getDoc, doc, limit } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Swal from 'sweetalert2';


export const getProductos = (categoryId) => {
    
    
    const Swal = require("sweetalert2")
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId ? query(collection(db, 'productos'), where('category', '==', categoryId)) : query(
            collection(db, 'productos'), orderBy('category', 'desc'))
        getDocs(collectionRef)
            .then(response => {
                const productosAdapted = response.docs.map(doc1 => {
                    const data = doc1.data()
                    console.log(doc1.id)
                    return { id: doc1.id, ...data }
                })
              //  console.log(productosAdapted)
                resolve(productosAdapted)
            }).catch(error => {
                Swal.fire({
                    title: 'ERROR',
                    text: `${error}`,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                    allowOutsideClick: 'true'
                })

            })
    })
}
export const getProductosbyId = (productoId) => {
    return new Promise((resolve, reject) => {
        const productoRef = doc(db, 'productos', productoId)
        console.log(productoRef)
        getDoc(productoRef).then(response => {
            const data = response.data()
            const productoAdapted = { id: response.id, ...data }

            resolve(productoAdapted)
        }).catch(error => {
            reject(error)
        })
    })

}