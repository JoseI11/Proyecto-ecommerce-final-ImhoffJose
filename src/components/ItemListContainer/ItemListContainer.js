
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
        return <Spinner animation="border" variant="warning" className='spinner'/>
    }
    if(error){
        Swal.fire({
            title: 'Ups!!',
            text: `Ha ocurrido un error inesperado, por favor actualice la página`,
            icon: 'error',
            confirmButtonText: 'Cool',
           
        })

    }
    return (
        <div className='fondoProd'>
            {categoryId==='SSD'?<h1>Discos de estado solido</h1>:categoryId==='MemRam'?<h1>Memorias Ram</h1>:categoryId==='Procesadores'?<h1>Procesadores</h1>:<h1>{greetings}</h1>}
            {/* <h1>{greetings}</h1> */}
            <ItemList productos2={productos}/>
        </div>


    )
}
export default Itemlistcontainer