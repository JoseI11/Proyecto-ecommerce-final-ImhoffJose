import '../CartWidget/CartWidget.css';
const Cardwidget = ({valor}) =>{
    return(
        

        <div className="botonCarrito">
            <img className="imagenCarrito" src={"../images/carrito-removebg-preview.png"} alt="carrito compras"/>
        <p>{valor}</p>
        </div>
    )
}
export default Cardwidget