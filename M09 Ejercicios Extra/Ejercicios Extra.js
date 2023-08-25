/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arreglo = [];
  for (var prop in objeto) {
    arreglo.push([prop, objeto[prop]]);
  }
  return arreglo;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var arregloStringOrdenado = string.split("");
  arregloStringOrdenado.sort();
  var objetoString = {};
  var contadorLetra = 1;
  for (var i = 0; i < arregloStringOrdenado.length; i++) {
    if (arregloStringOrdenado[i] === arregloStringOrdenado[i + 1]) {
      contadorLetra++;
    } else {
      objetoString[arregloStringOrdenado[i]] = contadorLetra;
      contadorLetra = 1;
    }
  }
  return objetoString;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var arregloString = string.split("");
  var arregloMayuscula = [];
  var arregloMinuscula = [];
  var nuevoArregloString = [];
  arregloString.forEach((element) => {
    if (element.toUpperCase() === element) {
      arregloMayuscula.push(element);
    } else {
      arregloMinuscula.push(element);
    }
  });
  arregloString = arregloMayuscula.concat(arregloMinuscula);
  return arregloString.join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var arregloFrase = frase.split(" ");
  var nuevoArregloFrase = [];
  arregloFrase.forEach((element) => {
    var reversedWord = element.split("");
    reversedWord.reverse();
    nuevoArregloFrase.push(reversedWord.join(""));
  });
  return nuevoArregloFrase.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numeroString = numero.toString();
  var numeroAlReves = "";
  for (var i = 0; i < numeroString.length; i++) {
    numeroAlReves += numeroString.charAt(numeroString.length - i - 1);
  }
  if (numeroString === numeroAlReves) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var nuevoString = string;
  for (var i = 0; i < nuevoString.length; i++) {
    if (nuevoString.charAt(i) === "a") {
      nuevoString = nuevoString.replace("a", "");
      i--;
    } else if (nuevoString.charAt(i) === "b") {
      nuevoString = nuevoString.replace("b", "");
      i--;
    } else if (nuevoString.charAt(i) === "c") {
      nuevoString = nuevoString.replace("c", "");
      i--;
    }
  }
  return nuevoString;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort((element1, element2) => {
    return element1.length - element2.length;
  });
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var elementosEnComun = [];
  for (var i = 0; i < array1.length; i++) {
    for (var i2 = 0; i2 < array2.length; i2++) {
      if (array1[i] === array2[i2]) {
        elementosEnComun.push(array1[i]);
      }
    }
  }
  return elementosEnComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
