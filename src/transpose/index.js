/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
let finalMatrixArray = []
for (let i = 0; i<array[0].length; i++){
  
  let firstItem = array[0][i];
  let secondItem = array[1][i];
  let thirdItem = array[2][i];
  let newTwoDArray = [firstItem, secondItem, thirdItem]
  finalMatrixArray.push(newTwoDArray)
} 
return finalMatrixArray;

}

console.log(transpose([[5, 12, 17, 9, 3],[13, 4, 8, 14, 1],[9, 6, 3, 7, 21]]))

module.exports = transpose;
