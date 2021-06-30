
const array = [1,2,5,23, 7,8,22,23]
const array_two = ['Juan', 'Jaimito', 'Josue']
const object_array = [
  {
    name: 'Pedro',
    age: 25
  },
  {
    name: 'Jonnathan',
    age: 24
  },
  {
    name: 'Jaimito',
    age: 15
  }
]

const coincidence = array.find(number => {
  if (number == 23) {
    return true
  }
})

const filtered = array.filter(number => {
  return number > 30
})

let mayores = []

object_array.forEach(person => {
  // console.log(person.name)
})

mayores = object_array.filter(person => person.age >= 18)

const new_array = object_array.map((person, index) => {
  return {
    ...person,
    saldo: 20 * index
  }
})
.filter(person => person.saldo >= 20)
.find(person => person.name == 'Jaimito')


const reducer = object_array.reduce((acumulador, person) => {
  return person.age + acumulador
}, 0)

let array_y = [1,2,3,[4,5,[6,7, [8, 9, [10, 11]]]]]

const flatten_array = array_y.flat(3)

console.log(flatten_array);


// Consultar TODOS los personajes de rick y morty, luego: 

// 1- listar (imprimir) solo los personajes que sean de origin 'Earth' 
// y hayan aparecido en mas de 5 episodios.

// 2- finalmente listar (imprimir) todos los personajes que se encuentren vivos y 
// solo mostrar su nombre y su genero.

// Bonus: Hacer un find con el personaje con el nombre: 'Baby Legs' e indicar su especie