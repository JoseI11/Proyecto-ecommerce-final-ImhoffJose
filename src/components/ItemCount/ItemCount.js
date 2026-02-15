import { useState } from "react";
import { Button } from "react-bootstrap";

import '../ItemCount/ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const incremento = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decremento = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
       
    return (
        <div className="item-count-wrapper">
            <div className="count-controls">
                <button 
                    className="btn-count" 
                    onClick={decremento}
                    disabled={count <= 1}
                >
                    -
                </button>
                <span className="count-display">{count}</span>
                <button 
                    className="btn-count" 
                    onClick={incremento}
                    disabled={count >= stock}
                >
                    +
                </button>
            </div>
            <Button 
                className="btn-add-cart" 
                onClick={() => onAdd(count)} 
                disabled={count === 0}
            >
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount