/*
Fetch API:

Fetch API en JS permite hacer solicitudes HTTP de manera sencilla utilizando promesas. Se usa principalmente para obtener
y enviar datos a un servidor de base de datos.
Sintaxis:
    fetch('url de la API a consumir')
*/

// // Realizo una petición HTTP GET para obtener datos
// fetch('https://jsonplaceholder.typicode.com/posts/100') // URL de la API a consumir
//     .then(respuesta => respuesta.json()) // Convertir la respuesta de la petición de la API en formato JSON
//     .then(datos => console.log(datos)) // Mostrar los datos obtenidos en la consola
//     .catch(error => console.log('Error: ' + error)); // Captura de un posible error

// /* Método POST: Voy a enviar información */
// fetch('https://jsonplaceholder.typicode.com/posts', { // DENTRO DE {} VAN LOS PARÁMETROS
//     method: 'POST', // 'POST' debe ir entre comillas
//     headers: { // 'header' debería ser 'headers'
//         'Content-Type': 'application/json' // los headers definen el tipo de contenido que se va a enviar
//     },
//     //el body convertimos en este caso el objeto en un formato JSON
//     body: JSON.stringify({
//         title: 'Nuevo Post',
//         body: 'Contenido del post',
//         userId: 1
//     })
// })
// //procesamos la respuesta mediante un metodo get parecido
//     .then(respuesta => respuesta.json()) // Convertir la respuesta en JSON
//     .then(datos => console.log('Respuesta: ' + JSON.stringify(datos))) // Mostrar la respuesta
//     .catch(error => console.log('Error: ' + error)); // Captura de un posible error



//Crearemos lo mismo pero a traves de funciones asincronas

// async function ObtenerDatos() {
//     try {
//         let respuesta = await//toda funcion asincronata debe tener el await
//         //await: usado en peticiones y funciones asincronas
//         fetch('https://jsonplaceholder.typicode.com/posts/100'); //esperamos la respuesta del servidor
//         let datos = await respuesta.json();;//convirtiendo la respuesta a formato JSON
//         console.log(datos);
//     } catch (error) {
//         console.error('Error: ' + error);
//     }
// }

// console.log('Datos Obtenidos: ', ObtenerDatos());

//crear lo mismo pero con funcion tipo flecha
// let respuesta = await
//     fetch('https://jsonplaceholder.typicode.com/posts/100');
// async () => {
    
//     let datos = await respuesta.json();
//     console.log(datos);
// }
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    const lista = document.getElementById("users");
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = "usuario 1:" + user.name;
        lista.appendChild(li);
        
    });
})
.catch(error => console.error("Error", error));