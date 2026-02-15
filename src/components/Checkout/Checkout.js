
import { useState } from "react";
import Formulario from "../Formulario/Formulario";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import OrderProductos from "../OrderProduct/OrderProduct";
const Checkout = () => {

    const [Idcompra,setIdcompra]=useState();
    const CreateOrder = ({ usernombre, useremail, usertelefono1, cartEcommerce, getTotalcarrito }) => {
        
        let now=new Date()
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
           UpdateOrder(cartEcommerce)
        })
    }
    const UpdateOrder = (cartEcommerce) => {
       
        cartEcommerce.forEach(element => {
    
            const stockDb = element.stock
            const orderDoc = doc(db, 'productos', element.id)
            if (stockDb >= element.quantityToadd) {
                const res = Number.parseInt(stockDb) - Number.parseInt(element.quantityToadd)
            
                 updateDoc(orderDoc, { stock: res })
              
            } else {
                alert(`La cantidad de compra del producto ${element.name} es mayor a su stock`)
            }
    
        })
    }
    
  
    return (
     <>
       { Idcompra ? <OrderProductos idCompra={Idcompra} /> : <Formulario CreateOrder={CreateOrder}/>}
       
     </>
      
        
    )
}

export default Checkout;