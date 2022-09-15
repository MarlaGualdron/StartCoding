/*
Lucas,
Matias,
Jose,
Pedro,
Martina,
Marcelo,
Esteban,
Marcela,
Martín

1. Informar por consola el número de invitados
2.Imprimir por consola el nombre del ultimo invitado
3.A ultimo momento, se invito a perdro a la fiesta, por
lo que hay que agregarlo al final de la lista
4.Media hora antes de empezar Marcela confirmó que no 
podía asistir generar una nueva lista que contenga los invitados
que confirmaron su presencia
4.1 Por cada invitado, asignarle un número de orden conforme
su posición en la lista. Mostrar este número de orden en un nuevo array
de la siguiente manera Juan, orden:1
5. Suponiendo que cada invitado consumío la siquiente cantirdad 
de platos 
Lucas: 3 platos
Esteban : 1 platos
Jose: 1 plato
Los restantes: 4 platos
Calcula la cantidad de platos consumidos al final de la fiesta

6. Acomodar los invitados en orden alfabetico
*/

let guestsList = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martín",
];

console.log(`La cantidad de invitados es: ${guestsList.length}`);
console.log(`El ultimo invitado es: ${guestsList[guestsList.length - 1]}`);

let addGest = guestsList.push("Pedro");
console.log("Agregamos a pedro", guestsList);

let removeInvite = "Marcela";

let newguestsList = guestsList.filter((item) => {
  return item !== removeInvite;
});

console.log("Este es el array sin Marcela", newguestsList);

newguestsList.forEach((item, index) => {
  console.log(item, `orden: ${index + 1}`);
});

let countingGuestFood = [
  { name: "Lucas", plates: 1 },
  { name: "Matias", plates: 4 },
  { name: "jose", plates: 1 },
  { name: "Pedro", plates: 4 },
  { name: "Martina", plates: 4 },
  { name: "Marcelo", plates: 4 },
  { name: "Esteban", plates: 1 },
  { name: "Martin", plates: 4 },
];

const totalplates = countingGuestFood.reduce((acc, cur) => {
  return acc + cur.plates;
}, 0);

console.log("Total de platos", totalplates);

// solución del curso

const total = newguestsList.reduce((acc, cur) => {
  if (cur === "Lucas") {
    return acc + 3;
  } else if (cur === "Esteban" || cur === "Jose") {
    return acc + 1;
  } else return acc + 4;
}, 0);

console.log("otra forma", total);

orderList = newguestsList.sort();
console.log("Lista ordenada", orderList);
