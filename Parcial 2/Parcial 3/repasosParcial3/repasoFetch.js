//metodo fetch: Es una funcion de js que permite realizar peticiones HTTP  a API externas 
//API: codigo ya realizado que nos permite implementar a nuestro programa funcionalidades
//sin la necesidad de crearlas desde 0 son herramientas 
//Para hacer peticiones solo necesitamos: fetch('URL')
//Debajo de este fetch se nos devolvera una promesa por lo cual debemos capturarla con
//.then: se ejecuta cuando la promesa se resuelve exitosamente
//.catch: maneja errores enc aso de q esta haya sido rechazada
//recordando que una operacion asincrona es aquella que no modificara bloqueara el flujo principal del codigo
//Ejemplo de verificar el estado de una API: Este ejemplo verificamos que el contenido de la api 
//allá sido regresado a nosotros pero tengamos en cuenta que 
//1. Los datos que se nos regresan comunmente se los conoce como responde/respueste auqneu podemos cambiarlo
//2. La api nos devuelve un flujo de datos que merece ser procesado por ende debemos pasarla al formato que necesitemos
//3. El paso general que se haria en primer lugar seria transformar los datos a nuestro gusto
//Sintexis general: .then(respuesta => respuesta."Formato que queremos" tenemos: .sjon.bson.text.blob.arrayBuffer.buffer) acompañado de ())
//-----------------------------------------------------------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(respuesta => console.log(respuesta))
// .catch(error => console.log(error));
// Podemos tener varios .then uno tras otro pero el catch sera unico en la promesa
//Los then se ejecutan secuenciales y con que uno falle se va directo al catch directamente indep. de los demás
//-----------------------------------------------------------------------------------------------------------
//Entonces ya dicho esto vamos a volver a hacerlo
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then (response => console.log(response))
// .catch (error => console.log(error));
//Notar que se nos devuelve toda la informacion rescatada de la API ya que impirmo su respueta completa

//Recordando la sintaxis de una funcion flecha: argumento => instrucción si son varios parametros: (a, b) => console.log(a + b);
//-----------------------------------------------------------------------------------------------------------

// --- Método Get --- :  Metodo para conseguir información dentro una API
// si vemos el response de la API y contiene: ReadableStream significa que aun no convertimos nuestro response en un formato usable
//IMPORTANTE: cada then recibe como respuesta el resultado del anterior then
//incluso si transformo los datos los siguientes se veran afectados
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then (respuesta => respuesta.json())
// //al rescatar la información en formato JSON entonces estoy teniendo un objeto 
// // para recorrer las claves del objeto en JSON usare el for 
// //ojo para imprimir los resultados dentro del JSON usamos el for of que imprime los valores dentro del mismo
// //Debido a que element es el objeto de cada elemento del array de objeto por ende podemos imprimirlo direcatmeetn
// .then(informacion =>{
//     for (const element of informacion) {
//         console.log(element.email);
//     }
//  })
// .catch(error => console.log("Sucedio algo inesperado: ", error));

//-----------------------------------------------------------------------------------------------------------
//Ahora voy a imprimir esos valores dentro de una lista una vex que ya aprendio a como imprimirlos lo más básico en consola
//asigno a una variable la ubicación del elemento donde voy a imprimir
// let elemento =  document.getElementById('emails');
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(respuesta => respuesta.json())
// .then(informacion => {
//     let i = 0;
//     for (const objetito of informacion) {
        
//         let email = objetito.email;
//         elemento.innerHTML += `Informacion del email ${i}: ${email} <br>`;
//         i++;
//     }
// })
// .catch(error => console.log('Se ha producido un suceso inesperado:', error));
//POR MEJORAR:
/*
No olvidar que: Es mejor usar la forma de concatenar facil
no olvidar donde estamos inicializando lsa cosas
no olvidar el uso de for of para iterar entre objetos 
JSON es un archivo que contiene array de objetoso un objeto de objetos
Usar defer en el html sirve para: ejecutarse en paralelo con el dom pero espera que el dom este completamente cargado para poder implementar sus
funcionalides de modo que todo lo del scrpt tenga relacion dentro del html
*/

/* 
Este método que esta aqui es una forma muy lenta y puede sobrecargar la informacion de mi pagina en caso de tener millones de registros a necesitar
es por eso que podemos usar un metodo get para poder hacer de mejor manera esto y traer la infromacion necesario
Recordando:
GET: obtener
POST: enviar
PUT: actualizar
DELETE: eliminar
*/

//Ejemplo mediante el uso del method: get
//consumimos una API desde el mismo modo que los anteriores solo que:  fetch ('URL',{}); 
// let lista = document.getElementById('postId');
// fetch('https://jsonplaceholder.typicode.com/comments', {
// //Procedemos a elegir el metodo a usar:
//     method : 'GET',
//     //Solo usar los headers para añadir información pero en el caso del metodo get se usarian 
//     headers : {
//         //Usado para pedir a la API que queremos en formato JSON en caso de que regrese en mas formato
//         //Buena practica de programación
//         'Accept' : 'application/json' 
//     }
// })
// .then(respuesta => respuesta.json())
// .then(datos =>{
//     let elemento = 0;
//     //localizando el elemento en donde esta y su ubicación
//     //recorrer los datos de la API
//     for (const recorrer of datos) {
//         elemento++;
//         lista.innerHTML += `Iteracion de los Posts  ${elemento} , elemento numero ${recorrer.postId} <br>`
//     }
// })
// .catch(error => console.log('Se ha producido un suceso inesperado:', error));

//metodo post: la sintaxis es la misma que el metodo get pero aqui contenemos los sigueintes elementos
//header: 'Content-Type': 'application/json', usado al realizar solicitudes http ya que indicamos que tipo de dato estamos enviando
//pero el tipo de dato del body 
//body: la parte dela solicitud que contiene los datos que vamos a enviar puede ser formulario, json, archivo, objeto, etc
/*sintaxis: body: JSON.stringify(valor "objeto o valor a convertir en JSON
    replacer "es opcional y permite filtrar o transformar las prop de un objeto
    espacio "numero o cadena que define el espaciado en la cadena JSON
    //EJEMPLOS DE ENVIOS EN BODY
    --- JSON---
    body: JSON.stringify({
    nombre: 'Juan',
    edad: 30,
  }),}
  ---TEXTO PLANO--
  headers: {
    'Content-Type': 'text/plain',
  },
  body: 'Hola, este es un mensaje de texto plano',
};
")
})

*/
//------------------------------------- EJEMPLO PARA POST:
//ejemplo sin serializacion
fetch('https://reqres.in/api/users',{
    //definir un metodo para la solicitud
    method : 'POST',
    headers:{
        //especificar el formato de envio de mi informacion del body
        'Content-Type' : 'application/json'
    },
    //la estructura de lo que yo voy a enviar
    //serializacion: convertir datos complejos en un formato para ser transmito y reconstruido previamente
    // sirve hacer esto ya que las redes solo transmiten texto plano por eso debemos serializarlo
    // no olvidar que en el encabezado del body ayuda a serializar la informacion que vamos a enviar
    //podemos enviar directo el json de modo que no es necesario serializarlo
    //si no enviamos directo el json SI debemos serializarlo
    body : JSON.stringify({
        name : "Javico004" ,
        job : "student"
    })
})
//no olvidarnos de devolvernos la informacion que nos estamos enviando para poder volver a traerla y ver que la pai si tiene esa informacion
.then(response => response.json())
.then(data => {
    console.log(data); // Aquí verás TUS datos con el id y createdAt generados
});
//request: la informacion que voy a enviar
//response: la respuesta que recibo

