/* 
Registro
    Contruir un flujo de registro, un programa que le permite registrarse, primero da la bienvenida y 
    pregunta si desea registrarse o sea le da click en aceptar, se solicita un nombre de usuario  y validar que ese nombre 
    tenga más de 3 caracteres, ese nombre lo vamos a almacenar siempre en minúscula independientemente de como 
    lo ingrese el usuario 
    1 mensaje de bienvenida, si acepta registarse
    2 pido el nombre de usuario, valido que tenga al menos 3 caracteres 
    si no lo tiene le envío un mensaje de error y si lo tiene lo almaceno todo el minúscula
    3 ingresar una contraseña que al menos tenga 6 caracteres y si debe ser case sensitive, si la contraseña se guardó
    correctamente le mostamos un alert o algo que diga que se registró correctamente


*/

/*
Login
cuando el registro esté completo le vamos a mostrar un mensaje al usuario si desea iniciar sesión, una vez 
que le de aceptar pedir el nombre de usuario y contraseña, si uno de los datos son incorrectos se le muestra un mensaje
de error, caso contrario que sea exitoso. 

Si hay algun mensaje de error se le vuelve a dar la posibilidad de ingresar el dato erróneo, por ejemplo si el usuario está 
bien, pero la contraseña no, se le vuelve a pedir la contraseña, el usuario en cualquier momento puede dar cancelar y salir 
del programa 

*/

/*
Solución Registro 
*/

let welcome = confirm("Bienvenido, ¿Desea registrarse?");

if (welcome === true) {
  let userName = prompt(
    "Inserta un nombre de usuario, el mismo debe tener minimo 3 carácteres"
  );

  while (userName.length < 3) {
    userName = prompt(
      `El nombre de usuario tiene menos de 3 caracteres, por favor ingresa un nombre de usuario más largo`
    );
  }

  saveUserName = userName.toLowerCase();

  password = prompt(
    "Ingresa una contraseña, la misma debe tener al menos 6 caracteres"
  );

  while (password.length < 6) {
    password = prompt(
      "Contraseña inválida, por favor ingresa una con al menos 6 caracteres"
    );
  }
  savePassword = password;
  login = confirm("Te has registrado correctamente, ¿deseas iniciar sesión?");

  if (login === true) {
    confirmUser = prompt("Ingresa tu usuario");

    while (confirmUser !== saveUserName) {
      console.log("primer ingreso confirm user", confirmUser);
      confirmUser = prompt(
        "Usuario incorrecto, por favor ingresa de nuevo tu usuario"
      );
      console.log("segundo ingreso confirmUser", confirmUser);
    }
  } else window.close;

  confirmPassword = prompt("Ingresa tu contraseña");

  while (confirmPassword !== savePassword) {
    confirmPassword = prompt(
      "Contraseña incorrecta, por favor ingresa de nuevo tu contraseña"
    );
  }

  let session = alert("Sesión inciada");
} else goodbye = alert("Gracias por visitarnos, vuelva pronto");
