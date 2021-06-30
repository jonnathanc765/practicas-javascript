// Consultar TODOS los personajes de rick (primero armar tooodaa la lista de las primeras 5 
//paginas que ofrece la api) y morty, luego: 

// 1- listar (imprimir) solo los personajes que sean de origin 'Earth' 
// y hayan aparecido en mas de 5 episodios.

// 2- finalmente listar (imprimir) todos los personajes que se encuentren vivos y 
// solo mostrar su nombre y su genero.

// Bonus: Hacer un find con el personaje con el nombre: 'Baby Legs' e indicar su especie

const base_url = 'https://rickandmortyapi.com/api'

//Funciones

const limit = 5

const obtenerPersonajes = async () => {

  let counter = 0

  let all_character = []

  let url = `${base_url}/character/`

  do {
    const response = await fetch(url) 
    const data = await response.json()
    data.results.forEach(character => all_character.push(character))
    url = data.info.next
    counter++
  } while (counter < limit)

  return all_character
}
const showCharacter = async() =>{
  const results = await obtenerPersonajes()
  results.forEach(character => console.log(character)) 
}

const earthlings = async() =>{
  const results = await obtenerPersonajes()
  const terricolas = results.filter(
    character => character.origin.name.includes('Earth') && character.episode.length > 5
  )
  console.log(terricolas)
}

const alive = async() => {
  const results = await obtenerPersonajes()
  const nondead =  results.filter(character => character.status == 'Alive')
  console.log(nondead)
}

const found = async() => {
  const results = await obtenerPersonajes()
  const baby = results.find(character => character.name == 'Baby Legs')
  console.log(baby.species)
}


const fetcher = () => {
  earthlings();
  alive();
  found();
}

fetcher()