import { CartContext } from "../../context/CartContext";
import { useState, useContext } from "react"
import { Button, Form } from "react-bootstrap"
import "../Formulario/Formulario.css"
import { CreateOrder } from "../../services/firebase/Firestore/orders";
import { Validacionvalores } from "./Validaciones";
import { Formik } from "formik";
import { Link } from "react-router-dom";
const Formulario = () => {
    const [usernombre, setUsernombre] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userepetirmail, setUserepetirmail] = useState('')
    const [usertelefono1, setUsertelefono1] = useState('')

    const { cartEcommerce, getTotalcarrito ,clearCart} = useContext(CartContext)   
    return (
        <section>
            <h1 style={{ color: 'black' }}>Confirme su compra</h1>
            <Formik
                initialValues={{
                    username: '',
                    usermail: '',
                    userrepmail: '',
                    usertelefono: ''

                }}
                validate={(valores)=>{
    //                 let erroresForm = {}
    // if (!valores.username) {
    //      setUsernombre('')
    //     erroresForm.username = 'Debe ingresar su nombre'
       
    // } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.username)) {
    //     setUsernombre('')
    //     erroresForm.username = 'Debe contener letras y espacios'
        
    // }else{
    //     setUsernombre(valores.username);
    // }

    // if (!valores.usermail) {
    //     setUseremail('')
    //     erroresForm.usermail = 'Debe ingresar su mail'
    // } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.usermail)) {
    //     setUseremail('')
    //     erroresForm.usermail = 'El correo solo puede tener letras,guiones,numeros y guion bajo'
    // }else{
    //     setUseremail(valores.usermail)
    // }
    // if (!valores.userrepmail) {
    //     setUserepetirmail('')
    //     erroresForm.userrepmail = 'Debe ingresar su mail'

    // } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.userrepmail)) {
    //     setUserepetirmail('')
    //     erroresForm.userrepmail = 'El correo solo puede tener letras,guiones,numeros y guion bajo'
    // }else{
    //     setUserepetirmail(valores.userrepmail)
    // }
    // // 
    // if (!valores.usertelefono) {
    //     setUsertelefono1('')
    //     erroresForm.usertelefono = 'Debe ingresar su telefono'
    // } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valores.usertelefono)) {
    //     setUsertelefono1('')
    //     erroresForm.usertelefono = 'El telefono debe contener solo numeros y se debe agregar el codigo de area del mismo'
    // }else{
    //     setUsertelefono1(valores.usertelefono)
    // }
    
    // return erroresForm
                    let errores=Validacionvalores({valores,setUsernombre,setUseremail,setUserepetirmail,setUsertelefono1})
                
                    return errores
                }}
                onSubmit={(valores) => {
                    // setUsernombre(valores.username)
                    // setUseremail(valores.usermail)
                    // setUsertelefono1(valores.usertelefono)
             
                    CreateOrder({usernombre,useremail,usertelefono1,cartEcommerce,getTotalcarrito})
           
                    //clearCart()

             
             
                }}
            >
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <form className="formEstilo" onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formNombre">
                            <Form.Label className="labelEstilo">Nombre:</Form.Label>
                            <input className="form__field" type='text' id="username" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} placeholder='Armando Barreda' />
                            {touched.username && errors.username && <div className="error">{errors.username}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className="labelEstilo">Mail:</Form.Label>
                            <input className="form__field" type='email' id="usermail" name="usermail" placeholder='ejemplo-int@gmail.com' value={values.usermail} onChange={handleChange} onBlur={handleBlur} />
                            {touched.usermail && errors.usermail && <div className="error">{errors.usermail}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmailrepetir">
                            <Form.Label className="labelEstilo">Repita su mail:</Form.Label>
                            <input className="form__field" type='email' id="userrepmail" name="userrepmail" placeholder='ejemplo-int@gmail.com' value={values.userrepmail} onChange={handleChange} onBlur={handleBlur} />
                            {touched.userrepmail && errors.userrepmail && <div className="error">{errors.userrepmail}</div>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTelefono">
                            <Form.Label className="labelEstilo">Telefono:</Form.Label>
                            <input className="form__field" type='text' id="usertelefono" name="usertelefono" placeholder='0349215578525' value={values.usertelefono} onChange={handleChange} onBlur={handleBlur} />
                            {touched.usertelefono && errors.usertelefono && <div className="error">{errors.usertelefono}</div>}
                        </Form.Group>
               
                        {usernombre === '' || useremail === '' || userepetirmail === '' || usertelefono1 === '' ? <Button type='submit' disabled>Confirmar compra</Button>:<Button type='submit'>Confirmar compra</Button>}
                    </form>
                )}

            </Formik>
        </section>
    )
}

export default Formulario