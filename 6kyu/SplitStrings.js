// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
 const string = (str.length % 2 === 0 ) ? str : `${str}_`
 let INDEX_AC = 0;
 return string.split('')
  .reduce((acc, letra, index, arr) => {
   if(INDEX_AC > arr.length - 1) return acc;
   const element = `${arr[INDEX_AC]}${arr[INDEX_AC+1]}`;
   console.log(INDEX_AC)
   acc.push(element);
   INDEX_AC +=2
   return acc
  }, [])
}
console.log(solution('tttatsattsa'))