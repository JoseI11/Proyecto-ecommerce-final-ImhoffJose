import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetailListContainer/ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { getProductosbyId } from "../../services/firebase/Firestore/productos";
import { useAsync } from "../../hooks/useAsync";

const Itemdetailcontainer = () => {
    const { productoId } = useParams();
    
    // Eliminado fetch innecesario - ahora getProductosbyId retorna null si no existe
    const getProductosdetalle = () => getProductosbyId(productoId);
    const { data: producto, error, isloading } = useAsync(getProductosdetalle, [productoId]);

    if (isloading) {
        return (
            <div className="spinner-container">
                <Spinner animation="grow" variant="warning" className='spinner' />
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="error-container">
                <img 
                    src={'../images/icono-error.png'} 
                    alt="Icono de error" 
                    width="120" 
                    height="120"
                />
                <h1>Ha ocurrido un error inesperado</h1>
                <p>Por favor actualice la página</p>
            </div>
        );
    }
    
    // Verificar si el producto existe (getProductosbyId retorna null si no existe)
    if (!producto || !producto.name) {
        return (
            <div className="error-container">
                <img 
                    src={'../images/icono-error.png'} 
                    alt="Producto no encontrado" 
                    width="120" 
                    height="120"
                />
                <h1>El producto que está buscando no existe</h1>
            </div>
        );
    }
    
    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...producto} />
        </div>
    );
};

export default Itemdetailcontainer;