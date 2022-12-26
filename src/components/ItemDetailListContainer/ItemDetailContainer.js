

import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetailListContainer/ItemDetailContainer.css';
import { useParams } from "react-router-dom";

import { getProductosbyId } from "../../services/firebase/Firestore/productos";
import { useAsync } from "../../hooks/useAsync";
const Itemdetailcontainer = () => {
    const { productoId } = useParams()

    const getProductosdetalle=()=>getProductosbyId(productoId)
    const {data: producto, error,isloading}=useAsync(getProductosdetalle,[productoId])
    if (isloading) {
        return <><Spinner animation="grow" variant="warning" className='spinner' /></>
    }
    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...producto} />

        </div>


    )
}
export default Itemdetailcontainer