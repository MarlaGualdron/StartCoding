/* Ejercicio : Triangulo con #    
    #
    ##
    ###
    ####
    #####
*/

let numeral = "#";

for (i = 1; i <= 5; i++) {
  console.log(numeral.repeat(i));
}

// Solución del curso

let output = "";

for (i = 1; i <= 5; i++) {
  output += "#";
  console.log(output);
}

/*
    Imprima los números del 1 al 10 y me diga si es par o impar
*/

for (h = 0; h <= 10; h++) {
  if (h % 2 === 0) {
    console.log(`${h} es par`);
  } else {
    console.log(`${h} es impar`);
  }
}

/*
 FizzBuzz, programa que itele del 1 al 15, si es multiplo de 3 mostramos Fizz, si es multiplo de 5 Bazz y si 
 es multiplo de 3 y de 5 mostramos FizzBuzz completo 
*/

for (x = 1; x <= 15; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
  } else if (x % 3 === 0) {
    console.log("Fizz");
  } else if (x % 5 === 0) {
    console.log("Buzz");
  } else console.log(`${x}`);
}

//Otra forma

for (m = 1; m <= 15; m++) {
  let text = "";

  if (m % 3 === 0) {
    text += "Fizz";
  }

  if (m % 5 === 0) {
    text += "Buzz";
  } else if (m % 3 !== 0 && m % 5 !== 0) {
    text = m;
  }
  console.log(text);
}
