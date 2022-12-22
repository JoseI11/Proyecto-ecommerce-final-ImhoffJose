
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { getProductos1, getCategorybyid } from '../../asyncMockroductos';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import '../ItemListContainer/ItemListContainer.css'
import { getDocs,collection,query,where, orderBy} from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
const Itemlistcontainer = ({ greetings }) => {
    const { categoryId } = useParams()
    console.log(categoryId)
    const [loading,setLoading]=useState(true)
    const [productos, setProductos1] = useState([])
    // const[isloading,setLoading]=useState(true)
    useEffect(() => {
        setLoading(true);
        const collectionRef=categoryId ?query(collection(db,'productos'),where('category','==',categoryId)):query(
        collection(db,'productos'),orderBy('category','desc'))
        getDocs(collectionRef)
            .then(response=>{
                const productosAdapted=response.docs.map(doc1=>{
                    const data=doc1.data()

                    return {id: doc1.id,...data}
                })
                console.log(productosAdapted)
                setProductos1(productosAdapted)
            }).catch(error=>{
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
    }, [categoryId])
    if(loading){
        return <Spinner animation="border" variant="warning" className='spinner'/>
    }

    return (
        <div className='fondoProd'>
            <h1>{greetings}</h1>
            <ItemList productos2={productos} />
        </div>


    )
}
export default Itemlistcontainer