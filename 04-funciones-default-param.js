//Se le puede asignar un valor por defecto a una variable para que no aparezca NaN
function total (producto,precio,canitdad=1){
    console.log(producto,precio*canitdad,"€")

}

total("Levis etiq rija",100,3)
total("Levis etiq naranja", 60)