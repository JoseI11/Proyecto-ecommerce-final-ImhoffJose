import { CartContext } from "../../context/CartContext";
import { useState, useContext } from "react"
import { Button, Form } from "react-bootstrap"
import "../Formulario/Formulario.css"

import { Validacionvalores } from "./Validaciones";
import { Formik } from "formik";
const Formulario = ({CreateOrder}) => {
    const [usernombre, setUsernombre] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userepetirmail, setUserepetirmail] = useState('')
    const [usertelefono1, setUsertelefono1] = useState('')

    const { cartEcommerce, getTotalcarrito} = useContext(CartContext)   
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

                    let errores=Validacionvalores({valores,setUsernombre,setUseremail,setUserepetirmail,setUsertelefono1})
                
                    return errores
                }}
                onSubmit={() => {
         
                    CreateOrder({usernombre,useremail,usertelefono1,cartEcommerce,getTotalcarrito})
           
             
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