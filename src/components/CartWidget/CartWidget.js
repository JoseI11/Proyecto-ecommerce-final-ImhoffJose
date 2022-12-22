import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CartWidget/CartWidget.css';

const CardWidget = ({ valor }) => {
    return (
        <div className="botonCarrito">
            <Button as={Link} style={{display:'flex',color:'black',borderColor:'transparent',backgroundColor:'lightgrey',width:'100%',borderRadius:'20px'}} to='/cart'>
                <img className="imagenCarrito" src={"../images/carrito-removebg-preview.png"} alt="carrito compras" />
                <p className='valorCarrito'>{valor}</p>
            </Button>

        </div>
    )
}
export default CardWidget