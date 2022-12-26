import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import Formulario from "../Formulario/Formulario";
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { createOrder} from "../../services/firebase/Firestore/orders";
const Checkout = () => {


  
    // createOrder({username,usermail,usertelefono,cartEcommerce,getTotalcarrito})
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const objOrder = {
    //         buyer: {
    //             name: username,
    //             mail: usermail,
    //             telefono: usertelefono
    //         },
    //         items: cartEcommerce,
    //         total: getTotalcarrito()
    //     }
    //     console.log(objOrder)
    //     const orderRefer = collection(db, 'orderproducts')

    //     // addDoc(orderRefer, objOrder).then(response => {
    //     //     console.log(response.id)
    //     // })
    //    // updateOrder();
    // }
   
    return (
        <Formulario/>
    )
}

export default Checkout;