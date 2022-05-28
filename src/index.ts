

let btnEnv = document.getElementById("boton");

btnEnv?.addEventListener("click", () => {
  function esMultiplo(num1: number, num2: number): boolean {
    let salida: boolean;
    if (num1 % num2 === 0) {
      salida = true;
      console.log("verdad"); /* solo para pruebas */
      return salida;
     // el valor que tiene "salida" aca y mas abajo "queda almacenado" en la funcion, asi que va a parar a la linea 21 y como verás no se utiliza
     // en ningun lado, lo que vos mostras sale por consola en la linea 10 y 14. Asi que pierde todo sentido que uses un return. Y tambien que 
     //definas a la funcion como boolean
    } else {        
      salida = false;
      console.log("mentira"); /* solo para pruebas */
      return salida;
    }
  };

  let data1: number = Number(numero1.value);
  let data2: number = Number(numero2.value);
  esMultiplo(data1, data2);
});
//Por lo demas esta bien tu solucion
