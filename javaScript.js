const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("advertencias")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let advertencias = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    

    if(nombre.value.length <4){
        advertencias += "Inserte un nombre válido <br>"
        entrar = true
    }
    if(apellido.value.length <4){
        advertencias += "Inserte un apellido válido <br>"
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        advertencias += "El email no es válido <br>"
        entrar = true
    }
    if(mensaje.value.length <5){
        advertencias += "Inserte un mensaje válido  <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = advertencias
    }else{
        parrafo.innerHTML = "Enviado"
    }

})
