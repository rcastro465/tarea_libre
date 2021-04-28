
    function ValidaNombre(){
        var nombre =document.getElementById("nombre").value;
        var mensaje=document.getElementById("msgNombre");
    
    if (nombre.length<5){
        mensaje.innerText="el nombre debe tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
       mensaje.classList.remove("borrar");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText="el nombre es correcto";
        mensaje.classList.remove("error");
        mensaje.classList.remove("borrar");
        mensaje.classList.add("exito");
    }
    
    }
    function Validatelefono(){
        var telefono =document.getElementById("telefono").value;
        var mensaje=document.getElementById("msgtelefono");
    
    if (telefono.length<5){
        mensaje.innerText="el telefono debe tener al menos 8 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.remove("borrar");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText="el telefono es correcto";
        mensaje.classList.remove("error");
        mensaje.classList.remove("borrar");
        mensaje.classList.add("exito");
    }
    
    }
    



    function ValidarCorreo(){
      var regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var correo =document.getElementById("correo").value;
      var msgCorreo=document.getElementById("msgCorreo");
    
     if(!regex.test(correo)){
    msgCorreo.innerText="Ingrese un correo Valido!";
    msgCorreo.classList.remove("borrar");
    msgCorreo.classList.remove("exito");
    msgCorreo.classList.add("error");
     }else{
        msgCorreo.innerText="el correo ingresado es Valido!";
        msgCorreo.classList.remove("error");
        msgCorreo.classList.remove("borrar");
        msgCorreo.classList.add("exito");
     }
    
    
    }


    function validateform(){
        var correo =document.getElementById("correo").value;
        var telefono =document.getElementById("telefono").value;
        var nombre =document.getElementById("nombre").value;
        var msgCorreo=document.getElementById("msgCorreo");

        if (correo!="" && nombre!="" && telefono!=""){
            alert('Registro exitoso, nos contactaremos con usted');
            document.getElementById("correo").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("telefono").value = "";
            msgCorreo.classList.remove("exito");
            msgCorreo.classList.add("borrar");
            msgNombre.classList.remove("exito");
            msgNombre.classList.add("borrar");
            msgtelefono.classList.remove("exito");
            msgtelefono.classList.add("borrar");

        }else{
            alert('complete todos los datos solicitados');
        }
    }