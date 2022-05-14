

let btnEnv = document.getElementById("boton");

btnEnv?.addEventListener("click", () => {
  function esMultiplo(num1: number, num2: number): boolean {
    let salida: boolean;
    if (num1 % num2 === 0) {
      salida = true;
      console.log("verdad"); /* solo para pruebas */
      return salida;
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
