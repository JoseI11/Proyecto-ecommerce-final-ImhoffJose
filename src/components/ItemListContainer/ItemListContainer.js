
import ItemList from '../ItemList/ItemList';


import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import '../ItemListContainer/ItemListContainer.css'
import { getProductos } from '../../services/firebase/Firestore/productos';
import { useAsync } from '../../hooks/useAsync'
const Itemlistcontainer = ({ greetings }) => {
    const { categoryId } = useParams()
    const getProductosporcategoria = ()=>getProductos(categoryId)
    const { data: productos, error, isLoading} = useAsync(getProductosporcategoria, [categoryId])

    if(isLoading){
        return <Spinner animation="border" variant="warning" className='spinner'/>
    }

    return (
        <div className='fondoProd'>
            {categoryId==='SSD'?<h1>Discos de estado solido</h1>:categoryId==='MemRam'?<h1>Memorias Ram</h1>:<h1>{greetings}</h1>}
            
            <ItemList productos2={productos} />
        </div>


    )
}
export default Itemlistcontainer