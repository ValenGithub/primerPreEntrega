
let cubiertas = "";
let precio = 0;
let cantidad = 0;
let cantidadTotal = 0;
let continuarCompra = false;
let precioTotal = 0;
let descuento = 0.9;
let totalDescuento = 0;

const comprarGomas =  () => {



    do {
        cubiertas = prompt ("¿Que cubiertas quieres comprar? Auto, Camioneta, Camion o Moto");
        cantidad = parseInt(prompt("Ingrese cantidad"));

        const cantidadValidada = validarCantidad (cantidad)

        switch (cubiertas) {
            case "Auto":
                precio = 20000
                break;
            case "Camioneta":
                precio = 30000
                break;
            case "Camion":
                precio = 45000
                break;
            case "Moto":
                precio = 15000
                break;
            default:
                alert ("Ingrese alguno de los productos detallados a continuacion")
                precio= 0;
                cantidad= 0;
            
        }
        


        precioTotal += precio * cantidadValidada;
        continuarCompra = confirm("¿Desea otra cubierta?");


    } while (continuarCompra);

    const totalConDescuento = calcularDescuento (precioTotal)
    console.log(totalConDescuento)
    


};

const validarCantidad  = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert ("Ingrese un numero por favor")
        } else {
            alert ("Ingrese un numero distinto de cero")
        }
        cantidad = parseInt(prompt("Ingrese cantidad"));
    }
    return cantidad;
}
const calcularDescuento = (precioTotal) => {
    if(precioTotal >= 80000){
        totalDescuento = precioTotal * 0.9
        return totalDescuento
    } else{
        return precioTotal
    }
        
}


comprarGomas()
calcularDescuento()