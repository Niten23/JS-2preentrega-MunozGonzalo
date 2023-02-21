  
alert("Bienvenidos a la calculadora de gastos e inversiones");

alert("Utilizar para invitados usuario: invitado, contraseña:1234");

const usuario = "invitado";

const contrasenia = "1234";

let usuarioCartel =prompt("Ingrese su usuario");

let contraseniaCartel =prompt("Ingrese su contraseña");


const tasaInteres= 0.75
const cotdolarBlue = 373



if (usuario === usuarioCartel && contrasenia === contraseniaCartel) {
   alert ("Bienvenido no proveemos consejos de inversion");


   for(let i=0; i< tasaInteres; i++) { 

   let ingresos = parseInt(prompt("ingrese el total de sus ingresos del mes"));

   let gastos = parseInt(prompt("ingrese el total de sus gastos fijos del mes"));

   let dineroRestante= (ingresos - gastos);
   console.log(dineroRestante);

   alert("El dinero disponible es de $ " + dineroRestante);

   let gananciaUno = (dineroRestante * tasaInteres);

   alert("Ganancias anual invirtiendo a una tasa de 75% es de pesos " + gananciaUno);
   
   let compraRucula = (gananciaUno / cotdolarBlue );
   let promedio = calcular(ingresos, gastos);
   console.log(promedio)

   alert("Podra comprar el monto de dolares " + compraRucula);
   
   
   }
   
}

else {
    alert("usuario o contraseña incorrecta");
}



function calcular(ingresos, gastos){

    let promedio =(ingresos - gastos) ;
    return promedio;
    console.log(promedio)
      

}


class cotizacion {

    constructor(nombre, precioCompra, precioVenta, spread, inflacionMensual){
    this.precioCompra= precioCompra;
    this.precioVenta= precioVenta;
    this.spread= spread;
    this.inflacionMensual= inflacionMensual
    }
}

const dolarOficial= new cotizacion ("dolar oficial", 191, 199, 8, 5.1 );
const dolarBlue= new cotizacion  (373, 377, 4, 5.1);
const dolarMep= new cotizacion (355, 355, 0 , 5.1);


const arraycotizacion = [dolarOficial, dolarBlue, dolarMep];

console.log(arraycotizacion);


