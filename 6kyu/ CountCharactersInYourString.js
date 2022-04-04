// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
  if (!string) return {};
  return string
   .toLowerCase().split('')
    .reduce((acc, character) => {
      !acc[character] ? acc[character] = 1 : acc[character] += 1
      return acc 
    }, {})
}

console.log(count('GHVDFHGIUDKkjfsdoijgosid'))



