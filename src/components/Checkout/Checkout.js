import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {


    const [username, setUsername] = useState('')
    const [usermail, setUsermail] = useState('')
    const [usertelefono, setUsertelefono] = useState('')

    const { cartEcommerce, getTotalcarrito } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const objOrder = {
            buyer: {
                name: username,
                mail: usermail,
                telefono: usertelefono
            },
            items: cartEcommerce,
            total: getTotalcarrito()
        }
        console.log(objOrder)
        const orderRefer = collection(db, 'orderproducts')

        // addDoc(orderRefer, objOrder).then(response => {
        //     console.log(response.id)
        // })
        updateOrder();
    }
    const updateOrder = () => {
        const db = getFirestore();
        cartEcommerce.forEach(element => {
            //const dataDoc = doc.data(),
            const stockDb = element.stock
            const orderDoc = doc(db, 'productos', element.id)
            if (stockDb > element.quantityToadd) {
                const res = Number.parseInt(stockDb) - Number.parseInt(element.quantityToadd)
                console.log(res)
                // updateDoc(orderDoc, { stock: res })
            }else{
             alert(`La cantidad de compra del producto ${element.name} es mayor a su stock`)
            }

        });


    }

    return (

        <section>

            <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre:</Form.Label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Mail:</Form.Label>


                    <input value={usermail} onChange={(e) => setUsermail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label>Telefono:</Form.Label>
                    <input value={usertelefono} onChange={(e) =>  setUsertelefono(e.target.value)} required />
                </Form.Group>


                <Button type='submit'>Login</Button>
            </form>
            {/* <form onSubmit={enviarDatos}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre:</Form.Label>
                    <input placeholder="Ingrese su nombre" onChange={handleInputChange} name="username" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <input placeholder="Ingrese su email"  onChange={handleInputChange} name="usermail"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label>Telefono:</Form.Label>
                    <input placeholder="Ingrese su telefono"  onChange={handleInputChange} name="usertelefono" />
                </Form.Group>
            </form>
            <button type='submit'> Confirmar compra </button> */}

        </section>

    )
}

export default Checkout;