import { getProductos1byid } from "../../asyncMockroductos"
import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router-dom"



const Itemdetailcontainer = () => {
    const {productoId} = useParams()
    const [producto, setProductos] = useState({})
    const [isloading,setLoading] = useState(true)
    useEffect(() => {
        getProductos1byid(productoId).then((response) => {
            setProductos(response)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })

    }, [productoId])
    if(isloading){
        return <h1>Cargando producto...</h1>
    }
    return (
        <div>
            {console.log(producto)}
           <ItemDetail prod2={producto}/>
            {/* <ItemList productos2 = {productos1}/> */}
        </div>
 

    )
}
export default Itemdetailcontainer