const validator = {
  maskify: function (numeroDeTarjeta) {
    const maskmax = Math.max(0, numeroDeTarjeta.length - 4);
    const maskreemplazo = numeroDeTarjeta.slice(0, maskmax).replace(/./g, "#");
    const desenmas = numeroDeTarjeta.slice(-4);
    return maskreemplazo + desenmas;
  },

  isValid: function (tarjeta) {
    //Solicitar número de tarjeta

    //const numeroDeTarjeta = "4083952015263";
    console.log(tarjeta);

    //Convertir número de tarjeta en array
    const tarjetaDividida = [...tarjeta];
    console.log(tarjetaDividida);

    //Tomar el número de trajeta e invertirlo
    const invertirArreglo = tarjetaDividida.reverse();
    console.log(invertirArreglo);

    //Convertir el array en número
    const conversionNumero = invertirArreglo.map(Number);
    console.log(conversionNumero);

    //Tomo la conversión de números realizada y aplico el método filter teniendo en cuenta la posición que necesito (par),
    // por eso coloco 1

    const arrFiltradoP = conversionNumero.filter(
      (num, index) => index % 2 === 1
    );
    console.log(arrFiltradoP);

    //Tomo la conversión de números realizada y aplico el método filter teniendo en cuenta la posición que necesito (impar),
    // por eso coloco 0

    const arrFiltradoI = conversionNumero.filter(
      (num, index) => index % 2 === 0
    );
    console.log(arrFiltradoI);

    // Tomo los digitos de las posiciones pares y las multiplico por 2

    const producto = arrFiltradoP.map(function (num) {
      //(num * 2)
      // console.log (num * 2);
      let resultado = num * 2;

      if (resultado >= 10) {
        // Convierto los números en strings y al mismo tiempo en números para poder sumar sus posiciones
        resultado =
          parseInt(resultado.toString()[0]) + parseInt(resultado.toString()[1]);
        console.log(resultado);
      }

      return resultado;
    });
    //Suma de todos los valores impares
    let sumaI = 0;

    for (const n of arrFiltradoI) {
      sumaI += n;
    }
    console.log(sumaI);

    //Suma de todos los valores pares

    let sumaP = 0;

    for (const n of producto) {
      sumaP += n;
    }
    console.log(sumaP);

    //Suma de pares e impares

    const sumaTotal = sumaI + sumaP;
    console.log(sumaTotal);

    //Verificar si al momento de %por 10 da 0 

    const esValida = sumaTotal % 10 === 0;

    console.log(esValida);
    

    alert(esValida ? "La tarjeta es válida" : "La tarjeta no es válida");
    return(esValida);
  },
};
export default validator;
