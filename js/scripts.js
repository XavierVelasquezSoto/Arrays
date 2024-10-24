//1 - Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const randomNum = array => {
  randomArray = Math.floor(Math.random() * array.length);
  return array[randomArray];
};
const resultRandomNum = randomNum([1, 5, 8, 9, 3]);
console.log(resultRandomNum);

//2 - - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

/*   - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]"
 */

const higestAndLowest = (numA, numB, numC) => {
  const mayor = Math.max(numA, numB, numC); //Math.max  calcula el número maximo
  const minus = Math.min(numA, numB, numC); //Math.min  calcula el número minimo
  
  console.log(`El mayor es ${mayor}`);
  console.log(`El menor es ${minus}`);
};
  
  higestAndLowest(1, 2, 3);

/* const mediaNum = array => {
    const sum = array[0] + array[1] + array[2]
    const average = sum / 3

    console.log(`La suma de todos los números es: ${sum}`)
    console.log(`La media de todos los números es: ${average}`)
    console.log(`El mayor es ${array[2]} y el menor es ${array[0]}`)
}
mediaNum([4,5,16]) */

/* const higestAndLowest = (numA, numB, numC) => {
  let mayor = '';
  let minus = '';

  if (numA >= numB && numA >= numC) {
    mayor = numA;
  }
  if (numB >= numA && numB >= numC) {
    mayor = numB;
  }
  if (numC >= numA && numC >= numB) {
    mayor = numB;
  }
  if (numA <= numB && numA <= numC) {
    minus = numA;
  }
  if (numB >= numA && numB >= numC) {
    minus = numA;
  }
  if (numC >= numA && numC >= numB) {
    minus = numA;
  }
  console.log(`El mayor es ${mayor}`);
  console.log(`El menor es ${minus}`);
};

higestAndLowest(1, 2, 3); */ // este es uno de los caminos largos



//3 - Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const arrayContainsRandomNumber = number => {
  const randomNumber = Math.floor(Math.random() * 11);

  if (number.includes(randomNumber)) {
    console.log(`El número ${randomNumber} está en el array en la posición ${number.indexOf(randomNumber)}`);
  } else {
    console.log(`El número ${randomNumber} no está en el array`);
  }
};
arrayContainsRandomNumber([1, 2, 3, 4, 5]);

/* const numRandom = array => {
  const random1 = Math.floor(Math.random() * 11);
  const random2 = array.indexOf(random1);

  console.log(`Contiene el número ${random1}`);

  if (random2 !== -1) {
    return `El número esta en la posición ${random1}`;
  }
  return `No esta en la posición ${random1}`;
};

const resultNumRandom1 = numRandom([2, 4, 6, 8, 10]);
console.log(`${resultNumRandom1}`); */



//4 - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const empty = array => {
  const randomHundred1 = Math.floor(Math.random() * 101);
  const randomHundred2 = Math.floor(Math.random() * 101);
  const randomHundred3 = Math.floor(Math.random() * 101);

  array.push(randomHundred1, randomHundred2, randomHundred3);

  return array;
};

const resultEmpty = empty([]);
console.log(resultEmpty);

//5 - Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

const dniLetter = dni => {
  const letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];
  const position = dni % 23;
  console.log(dni + letters[position]);
};

dniLetter('02759043');

//6 - Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const initialArray = array => {
  const newArray1 = array[0].charAt(0).toUpperCase();
  const newArray2 = array[0].charAt(array[0].length - 1).toUpperCase();
  const newArray3 = array[1].charAt(0).toUpperCase();
  const newArray4 = array[1].charAt(array[1].length - 1).toUpperCase();
  const newArray5 = array[2].charAt(0).toUpperCase();
  const newArray6 = array[2].charAt(array[2].length - 1).toUpperCase();

  return [newArray1, newArray2, newArray3, newArray4, newArray5, newArray6];
};
const resultinitialArray = initialArray(['hola', 'adios', 'gato']);
console.log(resultinitialArray);

//7 - Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.

const threePairs = array => {
  let random = 0;
    if(array[0] % 2 === 0){
      random++
    }

    if(array[1] % 2 === 0){
      random++
    }

    if(array[2] % 2 === 0){
      random++
    }
    return random
};

const resultThreePairs = threePairs([8, 6, 5]);
console.log(resultThreePairs);

//8 - Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.

const arrayReverse = array => {
  const inverse = [];
  inverse.push(array[2]);
  inverse.push(array[1]);
  inverse.push(array[0]);
  return inverse;
};

const resultReverse = arrayReverse([1, 2, 3]);
console.log(resultReverse);

//9 - Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.

const threeArrays = array => {
  let add = [];
  add.push(array[0].toUpperCase());
  add.push(array[1].toUpperCase());
  add.push(array[2].toUpperCase());

  return add;
};
const resultthreeArray = threeArrays(['hola', 'adios', 'cielo']);
console.log(resultthreeArray);
