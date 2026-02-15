import { getDocs, collection, query, where, orderBy, getDoc, doc} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Swal from 'sweetalert2';


export const getProductos = (categoryId) => {
    
    
    
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId ? query(collection(db, 'productos'), where('category', '==', categoryId)) : query(
            collection(db, 'productos'), orderBy('category', 'desc'))
        getDocs(collectionRef)
            .then(response => {
                const productosAdapted = response.docs.map(doc1 => {
              
                    const data = doc1.data()
                  
                    return { id: doc1.id, ...data }
                })
   
                resolve(productosAdapted)
            }).catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Ups!!',
                    text: `Ha ocurrido un error inesperado, por favor actualice la página`,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                   
                })
                reject(error)
            })
    })
}
export const getProductosbyId = (productoId) => {
    return new Promise((resolve, reject) => {
        const productoRef = doc(db, 'productos', productoId)
       
        getDoc(productoRef).then(response => {
            const data = response.data()
            const productoAdapted = { id: response.id, ...data }
                
            resolve(productoAdapted)
        }).catch(error => {

            reject(error)
            Swal.fire({
                title: 'Ups!!',
                text: `Ha ocurrido un error inesperado, por favor actualice la página`,
                icon: 'error',
                confirmButtonText: 'Cool',
               
            })
        })
    })

}