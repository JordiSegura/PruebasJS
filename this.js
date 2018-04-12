//This apunta hacia la variable dentro de un objeto
var miObjeto = {
    nombre: "Juan",
    saludar : function(){
        console.log("HOla mi nombre es "+this.nombre)
    }
}

/*miObjeto.saludar()
console.log()*/
var otroObjeto = {
    nombre: "Carla"};
   
miObjeto.saludar.call(otroObjeto)
