
import ItemList from '../ItemList/ItemList';import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import '../ItemListContainer/ItemListContainer.css'
import Swal from 'sweetalert2';
import { getProductos } from '../../services/firebase/Firestore/productos';

import { useAsync } from '../../hooks/useAsync'

const Itemlistcontainer = ({ greetings }) => {
    

    const { categoryId } = useParams()

    const getProductosporcategoria = ()=>getProductos(categoryId)
    const { data: productos, error, isLoading} = useAsync(getProductosporcategoria, [categoryId])

    if(isLoading){
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="danger" className='spinner'/>
            </div>
        )
    }
    if(error){
        Swal.fire({
            title: 'Ups!!',
            text: `Ha ocurrido un error inesperado, por favor actualice la página`,
            icon: 'error',
            confirmButtonText: 'Cool',
           
        })

    }
    
    const getCategoryTitle = () => {
        switch(categoryId) {
            case 'SSD': return 'Discos de Estado Sólido';
            case 'MemRam': return 'Memorias RAM';
            case 'Procesadores': return 'Procesadores';
            default: return greetings;
        }
    }
    
    return (
        <div className='products-container'>
            <h1>{getCategoryTitle()}</h1>
            <ItemList productos2={productos}/>
        </div>


    )
}
export default Itemlistcontainer