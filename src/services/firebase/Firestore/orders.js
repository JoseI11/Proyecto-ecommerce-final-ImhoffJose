import { addDoc, collection, getFirestore, doc, updateDoc, getDoc, getDocs, orderBy, limit, query,FirebaseFirestore } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Swal from "sweetalert2";

import { useState } from "react";


// const fun= async()=>{
//     const q = query(
//     collection(db, "orderproducts"),
//     limit(1),
//     orderBy("id", "desc"),
//   );

//   const el = await getDocs(q);

//   const product = el.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   return product.id;
// }
let valores = ''

export const CreateOrder = ({ usernombre, useremail, usertelefono1, cartEcommerce, getTotalcarrito }) => {
    const [Idcompra,setIdcompra]=useState();
 //   let now=new Date()
    const objOrder = {
        
        buyer: {
            name: usernombre,
            mail: useremail,
            date: now,
            telefono: usertelefono1
        },
        items: cartEcommerce,
        total: getTotalcarrito()
    }
    const orderRefer = collection(db, 'orderproducts')

    addDoc(orderRefer, objOrder).then(response => {
       setIdcompra(response.id)
    })
 //   UpdateOrder(cartEcommerce)
}
const UpdateOrder = (cartEcommerce) => {
    //  const Swal = require('sweetalert2')
    const db = getFirestore();
    cartEcommerce.forEach(element => {

        const stockDb = element.stock
        const orderDoc = doc(db, 'productos', element.id)
        if (stockDb > element.quantityToadd) {
            const res = Number.parseInt(stockDb) - Number.parseInt(element.quantityToadd)
            return 1;
            //console.log(res)
            //   updateDoc(orderDoc, { stock: res })
            // Swal.fire({
            //     title: 'Compra realizada',
            //     text: `Su compra se realizo con exito, para seguimiento de la misma utilice este codigo `,
            //     icon: 'success',
            //     confirmButtonText: '<Button as={Link} to=/>Compra<Button>',
            //     allowOutsideClick: 'true'

            // })
        } else {
            alert(`La cantidad de compra del producto ${element.name} es mayor a su stock`)
        }

    })
}