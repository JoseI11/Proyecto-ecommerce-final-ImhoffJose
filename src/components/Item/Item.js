
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../Item/Item.css'


const Item = ({ prod1 }) => {

    return (
        <Card className="product-card">
            <div className="card-img-container">
                <Card.Img 
                    variant="top" 
                    src={prod1.img} 
                    alt={prod1.name} 
                    className="card-img-top"
                    width="250"
                    height="200"
                    loading="lazy"
                />
                {prod1.stock > 0 ? (
                    <span className="stock-badge in-stock">En stock</span>
                ) : (
                    <span className="stock-badge out-of-stock">Agotado</span>
                )}
            </div>
            <Card.Body>
                <Card.Title className="card-title">{prod1.name}</Card.Title>
                <p className="product-price">${prod1.price.toLocaleString()}</p>
                {prod1.stock > 0 ? (
                    <p className="product-stock available">Disponibles: {prod1.stock} unidades</p>
                ) : (
                    <p className="product-stock unavailable">Sin stock disponible</p>
                )}
                <Button as={Link} to={`/producto/${prod1.id}`} variant="primary" className="btn-detail">
                    Ver detalle
                </Button>
            </Card.Body>
        </Card>
    )

}
export default Item