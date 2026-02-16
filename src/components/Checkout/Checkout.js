
import { useState } from "react";
import Formulario from "../Formulario/Formulario";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import OrderProductos from "../OrderProduct/OrderProduct";

const Checkout = () => {
    const [Idcompra, setIdcompra] = useState();
    const [isProcessing, setIsProcessing] = useState(false);
    
    const CreateOrder = async ({ usernombre, useremail, usertelefono1, cartEcommerce, getTotalcarrito }) => {
        setIsProcessing(true);
        
        const objOrder = {
            buyer: {
                name: usernombre,
                mail: useremail,
                date: new Date(),
                telefono: usertelefono1
            },
            items: cartEcommerce,
            total: getTotalcarrito()
        };
        
        try {
            const orderRefer = collection(db, 'orderproducts');
            const response = await addDoc(orderRefer, objOrder);
            await UpdateOrder(cartEcommerce);
            setIdcompra(response.id);
        } catch (error) {
            console.error('Error al crear la orden:', error);
        } finally {
            setIsProcessing(false);
        }
    };
    
    // Optimizado: ejecutar todas las actualizaciones en paralelo con Promise.all
    const UpdateOrder = async (cartEcommerce) => {
        const updatePromises = cartEcommerce
            .filter(element => element.stock >= element.quantityToadd)
            .map(element => {
                const orderDoc = doc(db, 'productos', element.id);
                const newStock = Number.parseInt(element.stock) - Number.parseInt(element.quantityToadd);
                return updateDoc(orderDoc, { stock: newStock });
            });
        
        // Alertar sobre productos sin stock suficiente
        cartEcommerce
            .filter(element => element.stock < element.quantityToadd)
            .forEach(element => {
                alert(`La cantidad de compra del producto ${element.name} es mayor a su stock`);
            });
        
        // Ejecutar todas las actualizaciones en paralelo
        await Promise.all(updatePromises);
    };
    
  
    return (
     <>
       { Idcompra ? <OrderProductos idCompra={Idcompra} /> : <Formulario CreateOrder={CreateOrder}/>}
       
     </>
      
        
    )
}

export default Checkout;