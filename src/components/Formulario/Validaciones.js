

export const Validacionvalores=({valores, setUsernombre,setUseremail,setUserepetirmail,setUsertelefono1}) => {
    let erroresForm = {}
    if (!valores.username) {
         setUsernombre('')
        erroresForm.username = 'Debe ingresar su nombre'
       
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.username)) {
        setUsernombre('')
        erroresForm.username = 'Debe contener letras y espacios'
        
    }else{
        setUsernombre(valores.username);
    }

    if (!valores.usermail) {
        setUseremail('')
        erroresForm.usermail = 'Debe ingresar su mail'
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.usermail)) {
        setUseremail('')
        erroresForm.usermail = 'El correo solo puede tener letras,guiones,numeros y guion bajo'
    }else{
        setUseremail(valores.usermail)
    }

    if (!valores.userrepmail) {
        setUserepetirmail('')
        erroresForm.userrepmail = 'Debe ingresar su mail'

    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.userrepmail)) {
        setUserepetirmail('')
        erroresForm.userrepmail = 'El correo solo puede tener letras,guiones,numeros y guion bajo'
    }else if(valores.usermail !== valores.userrepmail){
        setUserepetirmail('')
        erroresForm.userrepmail='Su mail debe coincidir con el mail ingresado en el campo anterior'
            
    }
    else{
        setUserepetirmail(valores.userrepmail)
    }
    // 
    if (!valores.usertelefono) {
        setUsertelefono1('')
        erroresForm.usertelefono = 'Debe ingresar su telefono'
    } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(valores.usertelefono)) {
        setUsertelefono1('')
        erroresForm.usertelefono = 'El telefono debe contener solo numeros y se debe agregar el codigo de area del mismo'
    }else{
        setUsertelefono1(valores.usertelefono)
    }
    
    return erroresForm
}