/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    // create an object to store the valid match   
    let validObject = {
            '(': ')',
            '{': '}',
            '[': ']'
          }
  //Testing whether invalid or not

  for(let i = 0; i<str.length; i++){
    let openValidBracket = ["(", "[", "{"];
    let closedValidBracket = [")", "]", "}"];
    let openedBracketArray = [];
    let closedBracketArray = [];
    if (str[i].includes(openValidBracket) === true){
      openedBracketArray.pop(str[i])
    }else if (str[i].includes(closedValidBracket) === true){
      closedBracketArray.pop(str[i])
    }
    if ((openedBracketArray.length !== closedBracketArray.length)){
      return "invalid"
    } else {continue;}
  }
  
  // create a newArray
    let newArray = []
    for(let char of str){
        //if character is in the validObject object, push it into the newArray
        if(validObject[char]){
            newArray.push(char)
            
        // when newArray is not empty and the topmost item of the newArray key in the validObject is equal to the character
        }else if(newArray.length > 0 && validObject[newArray[newArray.length-1]] === char){
        
        // remove the last element     
          newArray.pop()
        //   console.log(newArray)
        }else{
            return "invalid"
        }
    }
    
   //when newArray is empty, it means all matching brackets are found 
  return "valid"

}

console.log(isValid("[(])"))
console.log(isValid("(}"))
console.log(isValid("{[()[]]()}()"))
module.exports = isValid;
