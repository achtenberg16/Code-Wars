// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeCaracter(str) {
 const length = (str.length-1)
 const arr = str.split('');
 arr.reduce((acc, element, index) => {
   if(index === (length-length) || (index === length))  return acc 
    return `${acc}${element}`
 }, '')
}

removeCaracter('olandrias')