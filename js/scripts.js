//1 - Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const randomNum = array =>{
    randomArray = Math.floor(Math.random() * array.length)
    return randomArray
}
const resultRandomNum = randomNum([1,5,8,9,3])
console.log(resultRandomNum)

//2 - - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

/*   - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]"
 */

const mediaNum = array => {
    const sum = array[0] + array[1] + array[2]
    const average = sum / 3

    console.log(`La suma de todos los números es: ${sum}`)
    console.log(`La media de todos los números es: ${average}`)
    console.log(`El mayor es ${array[2]} y el menor es ${array[0]}`)
}
mediaNum([4,5,16])



//3 - Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const numRandom = array => {
   const random1 = Math.floor(Math.random() * array[0])   

const resultNumRandom1 = numRandom([2,4,6,8,10])
console.log(`${resultNumRandom1}`)

}

//4 - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

//5 - Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

//6 - Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']


//7 - Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.

const numArray = array => {
    return `${array[0]} es par, ${array[1]} es impar, ${array[2]} es impar`
}
const resultNumArray = numArray([2,5,7])
console.log(resultNumArray)


//8 - Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.

const arrayReverse = array => {
    
    return `${array[2]}, ${array[1]}, ${array[0]}`
}

const resultReverse = arrayReverse([1, 2, 3])
console.log(resultReverse);



//9 - Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.


const threeArrays = array => {

    
}
const resultthreeArray = threeArrays(["hola", "adios", "cielo"])
console.log(resultthreeArray)


/* const threeArrays = array => {
    console.log(array[0].toUpperCase(), array[0].toUpperCase(), array[0].toUpperCase())
}
threeArrays(["hola", "adios", "cielo"]) */


