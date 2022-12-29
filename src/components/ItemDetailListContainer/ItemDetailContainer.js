import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetailListContainer/ItemDetailContainer.css';
import { useParams } from "react-router-dom";

import { db } from '../../services/firebase/firebaseConfig';
import { collection,getDocs } from 'firebase/firestore';
import { getProductosbyId } from "../../services/firebase/Firestore/productos";
import { useAsync } from "../../hooks/useAsync";
import Swal from 'sweetalert2';
import { useEffect ,useState} from 'react';
const Itemdetailcontainer = () => {
    const { productoId } = useParams()
    const [arrayproductosId, setArrayproductosid] = useState([]);

    
    const getProductosdetalle = () => getProductosbyId(productoId)
    const { data: producto, error, isloading } = useAsync(getProductosdetalle, [productoId])

    useEffect(()=>{
     
        const arregloIdproductos = collection(db, "productos");
        getDocs(arregloIdproductos).then((response) => {
            const productoArrayid = response.docs.map((doc1) => {
              return { id: doc1.id };
            });
            setArrayproductosid(productoArrayid);
          });
      
    })
    if (isloading) {
        return <><Spinner animation="grow" variant="warning" className='spinner' /></>
    }
    if (error) {
        return  (
        Swal.fire({
            title: 'Ups!!',
            text: `Ha ocurrido un error inesperado, por favor actualice la página`,
            icon: 'error',
            confirmButtonText: 'Cool',
           
        }))
    }
    return (
        <>

            {arrayproductosId.some((item) => item.id === productoId)  ? <div>
                <h1>Detalle del producto
                </h1>
                <ItemDetail {...producto} />
            </div>:<div><img src={'../images/icono-error.png'} alt="Icono error"/><h1>El producto que esta buscando no existe</h1></div>
            }

        </>

    )
}
export default Itemdetailcontainer