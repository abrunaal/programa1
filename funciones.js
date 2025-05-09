
let usuarios = [];
const agregar_usuario = (nombre,apellido,cedula,telefono)=>{
    if(nombre && apellido && cedula){
    let usuario = {
        nombre:nombre, //propiedades de la funcion con su valor asignado, se asignan por posiciones, por lo que se deben agregar en orden
        apellido:apellido, 
        cedula:cedula,
        telefono:telefono
    }
    usuarios.push(usuario)
    console.log(usuarios)
    }
    else{
        console.log("debe ingresar nombre, apellido y cedula");s
}
}
const buscar_usuario=(cedula)=>{

}

export{

    agregar_usuario
}
