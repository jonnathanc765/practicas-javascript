
// Basic async javascript
const simple = () => {


  const message = 'Hola Mundo';

  setTimeout(() => {
    console.log(message, 'Dentro de delay');
  }, 0)

  console.log(message);

}

simple()






// Promises
const promises = () => {

  new Promise((resolve, reject) => {
    
    const all_works_right = true;
  
    if (all_works_right) {
      console.log('Resolved!');
      return resolve('Promise was successfully executed (first promise)')
    } else {
      return reject('Houston, We got a problem! (first promise)')
    }
  
  })
  
  new Promise((resolve, reject) => {
    
    const all_works_right = false;
  
    if (all_works_right) {
      console.log('Resolved!');
      return resolve('Promise was successfully executed (second promise)')
    } else {
      return reject('Houston, We got a problem! (second promise)')
    }
  
  })

}

// External api requests
const base_url = 'https://rickandmortyapi.com/api'

const promise_simple_request = () => {


  fetch(base_url + '/character')
  .then(response => response.json())
  .then(response => console.log(response))
 
  // .then(response => response.json())
  // .then(response => console.log(response))

}

const async_await_simple_request = async () => {

  const response = await fetch(base_url + '/character')
  const data = await response.json()

  let rick_gender = data.results[0].gender

  console.log(rick_gender);

}


// simple()
// promises()
// promise_simple_request()
// simple_request()
// async_await_simple_request()















// Reto 

// Imprimir (con "console.log()") el listado de todas las localizaciones de rick y morty usando el recurso: 
// https://rickandmortyapi.com/documentation/#get-all-locations
// se debe imprimir solo el nombre y el id, cada uno en una linea 
// diferente. siguiendo el siguiente formato de ejemplo:

// 1- Earth
// 2- Abadango
// 3- Citadel of Ricks
// 4- Worldender's lair
// ... 


//Notas:
// - Se recomiendo el uso de templates literales para la impresion de cada elemento 
// - Como el recurso posee un paginado, solo se deberan imprimir los elementos que aparezcan en la primera pagina (actulamente un total de 20 elementos) 







const challenge = async () => {

  const response = await fetch(base_url + '/location')
  const data = await response.json()
  data['results'].forEach(location => {
    console.log(`${location.id}- ${location.name}`);
  })

}

// challenge()














