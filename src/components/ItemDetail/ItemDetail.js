
import Card from 'react-bootstrap/Card';
import ContadorIncremento from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';
const ItemDetail = ({ prod2 }) => {
    const handleonClick = (cantidad) => {
        return cantidad
    }
    return (
        <div>
            <div className='container1'>
                <Card >
                    <div className='row no-gutters'>
                        <div className='col-sm-5'>
                            <Card.Img className='imagenDetalle' variant="top" src={prod2.img} />
                        </div>
                        <div className='col-sm-7'>
                            <Card.Body>
                                <Card.Title>{prod2.name}</Card.Title>
                                <Card.Text>
                                    {prod2.description}
                                </Card.Text>
                                <p>{prod2.price}</p>
                                <ContadorIncremento initial={0} stock={15} onAdd={handleonClick} />
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>




            {/* <h2>{prod2.name}</h2>
            <p>{prod2.description}</p>
            <p>{prod2.price}</p>
            <img className="imagenProd" src={prod2.img} alt="img2" /> */}
        </div >
    )
}
export default ItemDetail