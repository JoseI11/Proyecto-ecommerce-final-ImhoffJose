
import { useState, useEffect } from 'react';
import Swal from "sweetalert2"
export const useAsync=(asyncFn,dependencias)=>{
    const [data, setData] = useState()
    const [error, setError] = useState()
    const[isloading,setLoading]=useState(true)
   
    if(!Array.isArray(dependencias)){
        dependencias = []
    }
    useEffect(() => {
        setLoading(true);
        asyncFn().then(data=>{
            setData(data)
        }).catch(error=>{
            
            setError(error)
            Swal.fire({
                title: 'Ups!!',
                text: `Ha ocurrido un error inesperado, por favor actualice la página`,
                icon: 'error',
                confirmButtonText: 'Cool',
               
            })
        }).finally(()=>{
            setLoading(false)
        })
    }, [...dependencias])//eslint-disable-line
    return {
        data,
        error,
        isloading
    }
}