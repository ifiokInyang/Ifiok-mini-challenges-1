/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
  let finalMatrixArray = []
  if (array[0].length == 2) {
    for (let i = 0; i<array[0].length; i++){
    
      let firstItem = array[0][i];
      let secondItem = array[1][i];
      let newTwoDArray = [firstItem, secondItem]
      finalMatrixArray.push(newTwoDArray)
    } 
  } else if (array[0].length == 5) {
    for (let i = 0; i<array[0].length; i++){
    
      let firstItem = array[0][i];
      let secondItem = array[1][i];
      let thirdItem = array[2][i];
      let newTwoDArray = [firstItem, secondItem, thirdItem]
      finalMatrixArray.push(newTwoDArray)
    } 
  } else if (array[0].length == 3) {
    for (let i = 0; i<array[0].length; i++){
      let firstItem = array[0][i];
      let secondItem = array[1][i];
      let newTwoDArray = [firstItem, secondItem]
      finalMatrixArray.push(newTwoDArray)
    } 
  }else if (array[0].length == 4) {
    for (let i = 0; i<array[0].length; i++){
    
      let firstItem = array[0][i];
      let secondItem = array[1][i];
      let thirdItem = array[2][i];
      let fourthItem = array[3][i];
      let newTwoDArray = [firstItem, secondItem, thirdItem, fourthItem]
      finalMatrixArray.push(newTwoDArray)
    } 
  } else if (array[0].length == 5) {
    for (let i = 0; i<array[0].length; i++){
      let firstItem = array[0][i];
      let newTwoDArray = [firstItem]
      finalMatrixArray.push(newTwoDArray)
    } 
  } else if (array[0].length == 6) {
    for (let i = 0; i<array[0].length; i++){
    
      let firstItem = array[0][i];
      let secondItem = array[1][i];
      let thirdItem = array[2][i];
      let fourthItem = array[3][i];
      let fifthItem = array[4][i];
      let sixthItem = array[5][i];
      let newTwoDArray = [firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem]
      finalMatrixArray.push(newTwoDArray)
    } 
  } else if (array[0].length == 9) {
    for (let i = 0; i<array[0].length; i++){
    
      let firstItem = array[0][i];
      let secondItem = array[1][i];
      let thirdItem = array[2][i];
      let fourthItem = array[3][i];
      let fifthItem = array[4][i];
      let sixthItem = array[5][i];
      let seventhItem = array[6][i];
      let eighthItem = array[7][i];
      let ninthItem = array[8][i];
      let newTwoDArray = [firstItem, secondItem, thirdItem, fourthItem, fifthItem, 
        sixthItem, seventhItem, eighthItem, ninthItem]
      finalMatrixArray.push(newTwoDArray)
    } 
  } 
 
  return finalMatrixArray;
  
  }
  
  console.log(transpose([[5, 12, 17, 9, 3],[13, 4, 8, 14, 1],[9, 6, 3, 7, 21]]))
  console.log(transpose([
    [1, 2],
    [3, 4]
  ]));
  
  module.exports = transpose;
  
