/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let totalNumber = 0;
        let romanNumber;
            if(roman.includes("IV")) {
                romanNumber = 4
                totalNumber += romanNumber
                roman = roman.replace("IV", "")
            } if(roman.includes("IX")) {
                romanNumber = 9
                totalNumber += romanNumber
                roman = roman.replace("IX", "")
            } if(roman.includes("XL")) {
                romanNumber = 40
                totalNumber += romanNumber
                roman = roman.replace("XL", "")
            } if(roman.includes("XC")) {
                romanNumber = 90
                totalNumber += romanNumber
                roman = roman.replace("XC", "")
            } if(roman.includes("CD")) {
                romanNumber = 400
                totalNumber += romanNumber
                roman = roman.replace("CD", "")
            } if(roman.includes("CM")) {
                romanNumber = 900
                totalNumber += romanNumber
                roman = roman.replace("CM", "")
            }  
            
            for (let i = 0; i<roman.length; i++){
                let numeral = roman[i]
        if(numeral === "I") {
                romanNumber = 1
                totalNumber += romanNumber
            } if(numeral === "V"){
                romanNumber = 5
                totalNumber += romanNumber
            } if(numeral=== "X") {
                romanNumber = 10
                totalNumber += romanNumber
            } if(numeral=== "L") {
                romanNumber = 50
                totalNumber += romanNumber
            } if(numeral === "C") {
                romanNumber = 100
                totalNumber += romanNumber
            } if(numeral=== "D") {
                romanNumber = 500
                totalNumber += romanNumber
            } if(numeral === "M") {
                romanNumber = 1000
                totalNumber += romanNumber
            }
            }   
        return totalNumber
        
        
}
console.log(romanToDecimal("MCMXLIV"))
module.exports = romanToDecimal;
