/*Ejercicio 1
Simular una carrera entre tres personas, (Juan, Mario y Martin) y para esta carrera va a haber un orden de largada, primero juan, luego Mario y Martin
los console.log van a ir loguenado los nombres de la largada y el orden de llegada dependeran de como se irá mostrando en la pantalla
Sólo usar timeout y los console log en el orden de largada.
Utilizando solamente  setTimeout y sin alterar el orden de largada, escribir el codigo necesario para obtener los siguientes resultados

vuelta 1
Mario 
Martin
Juan

vuelta 2
Juan 
Martin 
Mario

vuelta 3
Martin 
Juan
Mario

vuelta 4
Mario
Juan
Martin
*/

/*  Una forma de resolverlo es usar la definición de callstar, web api y como funciona el sincronicos con el callback y loop evente 
se ejecutará primero el codigo sincronico y luego el setTimeout
*/

const raceStart = () => {
  console.log("Orden de largada");
  console.log("Juan");
  console.log("Mario");
  console.log("Martin");
};

raceStart();

const finalLap1 = () => {
  setTimeout(function () {
    console.log("juan");
  }, 2000);

  setTimeout(function () {
    console.log("Primera vuelta");
    console.log("Mario");
  }, 0);

  setTimeout(function () {
    console.log("Martin");
  }, 1000);
};

finalLap1();

const finalLap2 = () => {
  setTimeout(function () {
    console.log("Segunda vuelta");
    console.log("Juan");
  }, 3000);

  setTimeout(function () {
    console.log("Mario");
  }, 5000);

  setTimeout(function () {
    console.log("Martin");
  }, 4000);
};

finalLap2();

const finalLap3 = () => {
  setTimeout(function () {
    console.log("Juan");
  }, 7000);

  setTimeout(function () {
    console.log("Mario");
  }, 8000);

  setTimeout(function () {
    console.log("Tercera vuelta");
    console.log("Martin");
  }, 6000);
};

finalLap3();

const finalLap4 = () => {
  setTimeout(() => {
    console.log("Juan");
  }, 10000);

  setTimeout(function () {
    console.log("Cuarta vuelta");

    console.log("Mario");
  }, 9000);

  setTimeout(function () {
    console.log("Martin");
  }, 20000);
};

finalLap4();

/*Segundo ejercicio
Utilizando un setTimeout, crear una función que funcione como temporizador, haciendo una cuenta regresiva 
desde el número de segundos que se pase como argumento para llegar a cero. NO se puede usar para este ejercicio ningun
tipo de loop,(for, while) para resolver este ejercicio se puede investigar un poco sobre funciones recursivas 
*/

const tempo = (num) => {
  if (num < 0) return;
  else
    setTimeout(() => {
      console.log(num);
      return tempo(num - 1);
    }, 1000);
};

tempo(3);

/* Tercer ejercicio 
Api base de github https://api.github.com
a) obtener una lista de los repositorios publicos apibase/repositories
b)Generar una funcion que a partir de la respuesta del punto anterior genere y retorne un array del nombre de usuario de los owner
c) Agarrar el primer repositorio y listar todos los repositorios de ese owner 

*/
const baseUrl = "https://api.github.com";

const getlistPublicRepos = async () => {
  const response = await fetch(`${baseUrl}/repositories`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

getlistPublicRepos();

const getRepoOwner = async () => {
  const repositories = await getlistPublicRepos();
  const ownerArray = repositories.map((repo) => repo.owner.login);
  console.log(ownerArray);
};

getRepoOwner();

const getRepositoriesFromOwner = async () => {
  const repositories = await getlistPublicRepos();
  const firstOwnerRepositorie = repositories[0];
  const reposEndpoint = firstOwnerRepositorie.owner.repos_url;
  const listOwnerRepo = await fetch(`${reposEndpoint}`);
  const jsonParseListOwnerRepo = await listOwnerRepo.json();
  console.log(jsonParseListOwnerRepo);
};

getRepositoriesFromOwner();
