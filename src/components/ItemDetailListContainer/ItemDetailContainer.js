
import { getProductos1byid } from "../../asyncMockroductos";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetailListContainer/ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const Itemdetailcontainer = () => {
    const { productoId } = useParams()
    const [producto, setProductos] = useState({})
    const [isloading, setLoading] = useState(true)
    useEffect(() => {
        const productoRef = doc(db, 'productos', productoId)

        getDoc(productoRef).then(response => {
            const data = response.data()
            const productoAdapted = { id: response.id, ...data }

            setProductos(productoAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        }

        )
    }, [productoId])
    if(isloading){
        return <><Spinner animation="grow" variant="warning" className='spinner'/></> 
    }
    return (
        <div>
            {/* {console.log(producto)} */}
            <ItemDetail {...producto} />
            {/* <ItemList productos2 = {productos1}/> */}
        </div>


    )
}
export default Itemdetailcontainer