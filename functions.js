/*1.Pedir un número al usuario y devolverle si el mismo es -, + ó 0*/
/*2.Pedir un número al usuario indicando  si el mismo es primo o no*/
/*3.Crear un programa que convierta la temperatura de grados celsius y viceversa*/
/*4.Crear un programa que devuelva el total de la compra, para ello se pide
que ingrese el precio de cada producto y cuando ingrese la palabra total, se le devuelve
el total*/

// Pimer ejercicio

const ansNumber = (number) => {
  let message = "";
  let typeNumber = +number;
  if (!typeNumber && typeNumber !== 0) {
    return (message = "No es un número");
  }
  if (typeNumber > 0) {
    return (message = "el número ingresado es POSITIVO");
  } else if (typeNumber < 0) {
    return (message = "el número ingresado es NEGATIVO");
  } else typeNumber === 0;
  return (message = "Es CERO");
};

const askNumber = prompt("Dime que número quieres evaluar");

const response = ansNumber(askNumber);

alert(response);

// //Segundo ejercicio
const secondNumber = prompt("Dime que número quieres evaluar si es primo o no");

const primeNumber = (secondNumber) => {
  console.log(secondNumber);
  if (secondNumber == 2) {
    return alert(`El numero ${secondNumber} es primo`);
  }
  for (let i = 2; i <= secondNumber; i++) {
    if (secondNumber % i != 0 && secondNumber % i != 0) {
      return alert(`El numero ${secondNumber} es primo`);
    } else {
      return alert(`El numero ${secondNumber} no es primo`);
    }
  }
};
primeNumber(secondNumber);

// //Otra forma

const isPrime = (nunber) => {
  for (let i = 2; i < nunber; i++) {
    if (nunber % i == 0) return alert(false);
  }
  return alert(true);
};
const number = prompt("Dime que número quieres evaluar si es primo o no");

// isPrime(number);

// //Tercer ejercicio

const choosingDegreeTyoe = (degreeType) => {
  let parseDegreeType = degreeType.toLowerCase();
  if (parseDegreeType === "c") {
    let celsius = +prompt("Escribe el valor en celsius a convertir");
    alert(`El resultado en farenheit es: ${(celsius * 9) / 5 + 32}`);
  } else if (parseDegreeType === "f") {
    let fahrenheit = +prompt("Escribe el valor en farenheit a convertir");
    alert(`El resultado en celsius es :  ${((32 * fahrenheit - 32) * 5) / 9}`);
  } else {
    return alert("No escribiste ni c, ni f");
  }
};

const degreeType = prompt(
  "¿Deseas convertir celcius (c) o frarenheit (f)? Por favor escribe sólo c ó f"
).toLowerCase();

const checkDegreeType = choosingDegreeTyoe(degreeType);

// Cuarto Ejercicio

//Calcular el total de la compra

const totalPurcharse = () => {
  let total = 0;
  let productValue;
  do {
    productValue = prompt("Ingresa el valor del producto");
    if (+productValue) {
      total += +productValue;
    } else "El valor ingresado no es correcto";
  } while (productValue !== "total");
  return alert(`El total es: ${total}`);
};

totalPurcharse();
