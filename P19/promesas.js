function obtenerDatosDelServidor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = true

            if (exito) {
                let usuario = {
                    nombre: "Pepurro",
                    edad: 67
                }
                resolve (usuario)
            } else {
                reject("bro te salio el token :P")
            }
        }, 2000)
    })
}

obtenerDatosDelServidor()
.then(resp=>{
    return resp.nombre.toUpperCase();
})
.then(nombreMayus=>{
    console.log("Nombre en mayusculas: ", nombreMayus )
})
.catch(err=>{
    console.log("Resultado.catch: ", err)
})
.finally(()=>{
    console.log("Sigue abriendo cofres")
})

async function obtenerPosts(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        console.log(response)
    }catch(error){

    }finally{
        
    }
    
}

obtenerPosts();