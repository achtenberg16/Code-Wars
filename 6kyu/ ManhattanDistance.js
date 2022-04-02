// A fórmula da distância pode ser usada para encontrar a distância entre dois pontos. E se estivéssemos tentando caminhar do ponto A ao ponto B , mas houvesse prédios no caminho? Precisaríamos de alguma outra fórmula... mas qual?

// Distância de Manhattan
// A distância de Manhattan é a distância entre dois pontos em uma grade (como a geografia das ruas em forma de grade do bairro de Manhattan de Nova York) calculada apenas tomando um caminho vertical e/ou horizontal.

// Complete a função que aceita dois pontos e retorna a Distância de Manhattan entre os dois pontos.

// Os pontos são matrizes ou tuplas contendo a coordenada xe yna grade. Você pode pensar xcomo a linha na grade e ycomo a coluna.

// Exemplos
// * Input [1, 1], [1, 1] => Output 0
// * Input [5, 4], [3, 2] => Output 4
// * Input [1, 1], [0, 3] => Output 3


const manhattanDistance = (pointA, pointB) => (
  pointA.reduce((acc, number, index) => {
     let n2 = pointB[index];
     const condition = (number > n2) ? number - n2 : n2 - number;
     return (acc + condition)
   }, 0)
)

console.log(manhattanDistance([1, 1, 5], [0, 3,5]))