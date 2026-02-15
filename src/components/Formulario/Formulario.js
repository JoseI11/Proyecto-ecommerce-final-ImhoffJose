import { CartContext } from "../../context/CartContext";
import { useState, useContext } from "react"
import { Button } from "react-bootstrap"
import "../Formulario/Formulario.css"

import { Validacionvalores } from "./Validaciones";
import { Formik } from "formik";

const Formulario = ({ CreateOrder }) => {
    const [usernombre, setUsernombre] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userepetirmail, setUserepetirmail] = useState('')
    const [usertelefono1, setUsertelefono1] = useState('')

    const { cartEcommerce, getTotalcarrito } = useContext(CartContext)
    const totalCompra = getTotalcarrito();
    
    const isFormValid = usernombre !== '' && useremail !== '' && userepetirmail !== '' && usertelefono1 !== '';

    return (
        <section className="checkout-container">
            <h1>Finalizar Compra</h1>
            
            <div className="checkout-content">
                <div className="checkout-form-card">
                    <h2>📝 Datos de Contacto</h2>
                    
                    <Formik
                        initialValues={{
                            username: '',
                            usermail: '',
                            userrepmail: '',
                            usertelefono: ''
                        }}
                        validate={(valores) => {
                            let errores = Validacionvalores({ valores, setUsernombre, setUseremail, setUserepetirmail, setUsertelefono1 })
                            return errores
                        }}
                        onSubmit={() => {
                            CreateOrder({ usernombre, useremail, usertelefono1, cartEcommerce, getTotalcarrito })
                        }}
                    >
                        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Nombre completo</label>
                                    <input 
                                        className="form-input" 
                                        type='text' 
                                        id="username" 
                                        name="username" 
                                        value={values.username} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur} 
                                        placeholder='Ej: Juan Pérez' 
                                    />
                                    {touched.username && errors.username && (
                                        <div className="form-error">{errors.username}</div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="usermail">Correo electrónico</label>
                                    <input 
                                        className="form-input" 
                                        type='email' 
                                        id="usermail" 
                                        name="usermail" 
                                        placeholder='ejemplo@gmail.com' 
                                        value={values.usermail} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur} 
                                    />
                                    {touched.usermail && errors.usermail && (
                                        <div className="form-error">{errors.usermail}</div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="userrepmail">Confirmar correo electrónico</label>
                                    <input 
                                        className="form-input" 
                                        type='email' 
                                        id="userrepmail" 
                                        name="userrepmail" 
                                        placeholder='ejemplo@gmail.com' 
                                        value={values.userrepmail} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur} 
                                    />
                                    {touched.userrepmail && errors.userrepmail && (
                                        <div className="form-error">{errors.userrepmail}</div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="usertelefono">Teléfono de contacto</label>
                                    <input 
                                        className="form-input" 
                                        type='text' 
                                        id="usertelefono" 
                                        name="usertelefono" 
                                        placeholder='Ej: 11 1234-5678' 
                                        value={values.usertelefono} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur} 
                                    />
                                    {touched.usertelefono && errors.usertelefono && (
                                        <div className="form-error">{errors.usertelefono}</div>
                                    )}
                                </div>

                                <Button 
                                    type='submit' 
                                    className="btn-confirm"
                                    disabled={!isFormValid}
                                >
                                    {isFormValid ? 'Confirmar Compra' : 'Complete todos los campos'}
                                </Button>
                                
                                <p className="security-note">
                                    Pago seguro y encriptado
                                </p>
                            </form>
                        )}
                    </Formik>
                </div>

                <div className="order-summary-card">
                    <h3>🛒 Resumen del Pedido</h3>
                    
                    <div className="order-items">
                        {cartEcommerce.map(item => (
                            <div key={item.id} className="order-item">
                                <span className="order-item-name">{item.name}</span>
                                <span className="order-item-qty">x{item.quantityToadd}</span>
                                <span className="order-item-price">
                                    ${(item.price * item.quantityToadd).toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="order-total">
                        <span>Total a pagar:</span>
                        <span>${totalCompra.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Formulario