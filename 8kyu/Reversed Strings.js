// // Complete the solution so that it reverses the string passed into it.
// // 'world'  =>  'dlrow'
// 'word'   =>  'drow'
let a = 'abcd';
function reverses (str) {
    const array = str.split('').reverse()
    if(array.length > 0){
    return array.reduce((acc, index) => acc + index)}
     return str
}



console.log(reverses(a))