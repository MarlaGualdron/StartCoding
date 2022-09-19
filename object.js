/*Ejercicios
1. Crear una clase deportes  que reciba el atributo nombre
y escribir un metodo que permita mostrar el nombre por consola
y crear un metodo que permita identificar si el deporte es individual o 
por equipos.

Crear una subclase que se va a llamar deportes de equipo que permita 
además del nombre la cantidad de jugadores por equipos
y crear un metodo que permita mostrar  "para jugar x necesitas n jugadores por equipo"

futbol, basket y tenis 

2. Andrea y Martin deciden hacer un picnic al aire libre 
y cada uno va a llevar distintas cosas, andrea lleva una bolsa con dos cervezas, dos sandwiches y 
una bolsa de papas fritas 
Marin lleva una gaseosa, una torta y un paquete de galletas dulces

Crear un objeto para cada una de estas bolsas, nombre de producto y cantidad

mostrar por consola los productos que llevó cada uno, no la cantidad
despues en el camino al picnic la bolsa de andrea se rompio y todo se puso en la 
bolsa de martin, o sea se debe poder ver todos los productos
en la bolsa de martin y luego calculas la cantidad de productos
en la bolsa
*/

//Primer ejercicio

class Sports {
  constructor(name, individual) {
    this.name = name;
    this.individual = individual;
  }

  sportName() {
    console.log(`El deporte es: ${this.name} `);
  }
}

class TeamSports extends Sports {
  constructor(name, individual, nunmberTeamMembers) {
    super(name, individual);
    this.nunmberTeamMembers = nunmberTeamMembers;
  }

  sportName() {
    console.log(`El deporte es: ${this.name} `);
  }

  sportInformation() {
    console.log(
      `El ${this.name} es un deporte que se juega  ${
        this.individual ? "invidual" : "en equipo"
      } y con ${this.nunmberTeamMembers} jugadores `
    );
  }
}

// const teamSports = new TeamSports("Futbol", false, 11);
const teamSports = new TeamSports("Basket", false, 5);

teamSports.sportInformation();

// class Basket extends Sports {
//   constructor(name, individual, nunmberTeamMembers) {
//     super(name, individual);
//     this.nunmberTeamMembers = nunmberTeamMembers;
//   }

//   sportInformation() {
//     console.log(
//       `El ${this.name} es un deporte que se juega  ${
//         this.individual ? "invidual" : "en equipo"
//       } y con ${this.nunmberTeamMembers} jugadores `
//     );
//   }
// }

// const basket = new Basket("Basket", false, 5);

// basket.sportInformation();

class InvidualSports extends Sports {
  sportInformation() {
    console.log(
      `El ${this.name} es un deporte que se juega ${
        this.individual ? "invidual" : "en equipo"
      }  `
    );
  }
}

const indiviaudlSports = new InvidualSports("Tenis", true);

indiviaudlSports.sportInformation();

//Segundo ejercicio

class MartinsBag {
  constructor(coke, cake, cookies) {
    this.coke = coke;
    this.cake = cake;
    this.cookies = cookies;
  }
}

const martinsBag = new MartinsBag(1, 1, 1);
console.log("Bolsa de Martin", Object.keys(martinsBag));

class AndreasBag {
  constructor(beers, sandwiches, fries) {
    this.beers = beers;
    this.sandwiches = sandwiches;
    this.fries = fries;
  }
}
const andreasBag = new AndreasBag(2, 2, 1);
console.log("Bolsa de Andrea", Object.keys(andreasBag));

Object.assign(martinsBag, andreasBag);

console.log("Estos son los productos totales", martinsBag);

let totalElements = 0;

for (const key in martinsBag) {
  if (Object.hasOwnProperty.call(martinsBag, key)) {
    totalElements += martinsBag[key];
  }
}

console.log("El total de productos es:", totalElements);

const productsValues = Object.values(martinsBag);

const totalProcuts = productsValues.reduce((acc, curr) => acc + curr, 0);
console.log("Otra forma de sumar los totales", totalProcuts);
