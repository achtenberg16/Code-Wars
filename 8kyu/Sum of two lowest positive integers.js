// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  const lower = numbers.reduce((acc, numbers) => {if(numbers < acc) return numbers; return acc});
  const lower2 = numbers.reduce((acc, number) => {
      console.log('rodou um laço','acc', acc, 'number', number)
      if(acc === lower) return number; 
      else if(numbers < acc){
          return number
      }
      return acc
  })
  console.log(lower)
  console.log(lower2)
  return lower + lower2
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))