import { useState } from "react";
import { Button } from "react-bootstrap";
import '../ItemCount/ItemCount.css'
const ContadorIncremento = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)
    const incremento = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }
    const decremento = () => {
        if (count !== 0) {
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
                <Button variant="primary" onClick={() => onAdd(count)}>Agregar</Button>

                {/* <button className="agregar" >Agregar</button> */}
            </div>



        </div>


    )
}
export default ContadorIncremento