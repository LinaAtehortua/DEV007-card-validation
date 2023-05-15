import validator from "./validator.js";

const btnv = document.getElementById("btnv");

const ntc = document.getElementById("ntc");

let valorSinMascara = ""; // esta variable contiene el valor sin mascara

btnv.addEventListener("click", validar);
//ntc.addEventListener("input", mask);

function validar() {
  // usamos el valorSinMascara para validacion
 
  //valorSinMascara.length > 13 < 16 ? validator.isValid(valorSinMascara):false
console.log(ntc.value)
  

  const value = ntc.value;
 // const entre13And16 = value >=13 & value <= 16 ? true : false;
  //console.log(value.length);
  //alert(entre13And16);
  validator.isValid(value);
  mask(value);
}

function mask(event) {
  const maskedValue = validator.maskify(event);
  //valorSinMascara = event.target.value.replace(/#/g, ""); // actualizar el valor sin mascara
  ntc.value = maskedValue;

}
