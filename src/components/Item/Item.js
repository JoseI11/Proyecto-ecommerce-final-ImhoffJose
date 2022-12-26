
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../Item/Item.css'


const Item = ({ prod1 }) => {

    return (

        <div >

            <Card style={{width:'19rem', marginRight:'5px',position:'relative',left:'3px'}}>
                <Card.Img  variant="top" src={prod1.img} alt={prod1.name} />
                <Card.Body>
                    <Card.Title>{prod1.name}</Card.Title>
                    <p>${prod1.price}</p>
                    {prod1.stock > 0 ?<p>Stock:{prod1.stock}</p>:<h5>Sin stock disponible</h5>}
                    <Button as={Link} to={`/producto/${prod1.id}`} variant="primary" >Ver detalle</Button>
                </Card.Body>


            </Card>
        </div>
    )

}
export default Item