import { useState,useContext} from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

import '../ItemCount/ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)
   // const {setCartecommerce} = useContext(CartContext);
    const incremento = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }
    const decremento = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }
       
    return (
        <div>
            <div className="itemCountcontainer">
                <div className="contador">
                    <button className="resta" onClick={() => decremento()}>-</button>
                    <h5>{count}</h5>
                    <button className="suma" onClick={() => incremento()}>+</button>
                </div>
                <Button variant="primary" onClick={() => onAdd(count)} disabled={count===0}>Agregar producto</Button>
              
            
            </div>



        </div>


    )
}
export default ItemCount