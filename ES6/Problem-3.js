// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings

// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

//function to convert a character to lower case
function lower_char(char) 
{
  return char.toLowerCase()
}

// function to convert a given word to lower case
function word_lower_case(word)
{
  let result = "";
  for (let char of word)
  {
    result += lower_char(char);
  }
  return result;
}

// function to convert an array of strings to array of lower case strings
function arrLowerCase(array)
{
  return array.map(word => word_lower_case(word));
}

// sample input 
const input_Array = ["MA", "SA", "I", "SCH", "OOL"];

// input result 
const array_Result = arrLowerCase(input_Array);

console.log(array_Result)
