import '../ItemListContainer/ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { getProductos1, getCategorybyid } from '../../asyncMockroductos';
import { useParams } from 'react-router-dom';
const Itemlistcontainer = ({ greetings }) => {
    const { categoryId } = useParams()
    console.log(categoryId)
    const [productos1, setProductos1] = useState([])
    const[isloading,setLoading]=useState(true)
    useEffect(() => {
        if (!categoryId) {
              getProductos1().then((response) => {
                setProductos1(response)
            }).catch(error => {
                console.log(error)
            })
         
        } else {
             getCategorybyid(categoryId).then((response) => {
                console.log(categoryId)
                setProductos1(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [categoryId])

    return (
        <div>
            <h1>{greetings}</h1>
            <ItemList productos2={productos1} />
        </div>


    )
}
export default Itemlistcontainer