// Dada uma matriz de inteiros de qualquer comprimento, retorne uma matriz que tenha 1 adicionado ao valor representado pela matriz.

// a matriz não pode estar vazia
// apenas números inteiros não negativos de um dígito são permitidos
// Return nil(ou o equivalente em seu idioma) para entradas inválidas.

// Exemplos
// Por exemplo, a matriz [2, 3, 9]é igual 239, adicionar um retornaria a matriz [2, 4, 0].

// [4, 3, 2, 5]retornaria[4, 3, 2, 6]

// FUNDAMENTOS

const sum = (arr) => (+arr.reduce((acc, number) => acc + number, '') + 1)

const upArray = (arr) => {
  const condition = arr.some((num) => num < 0 || num > 9) || !arr.length;
  if (condition) return null;

  const toSum = (arr.length > 25) ? arr.filter((_elemnt, index) => index >= 25) : arr;
  console.log('arr to sum', toSum)
  let resultSum = sum(toSum);
  console.log(resultSum)

  const firstParte =  (arr.length >= 25) ? arr.reduce((acc, number, index) => {
    if(index < 25) return `${acc}${number}`
    return acc
  }, '') : false;

  const resultFinal =  firstParte ? `${firstParte}${resultSum}` : `${resultSum}` ;

    return  resultFinal.split('')
              .map(n => +n) 
}
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]))


let test = 1223372036854771;
test +=1
console.log(test)