/* 
 * STRING MANIPULATION:
 * 
 * 0. A string is a pair of apostrophes or quotation marks with or without anything in between them.
 */
 
 // 1. Operators //
 var txt1 = 'Bobby ';
 var txt2 = 'Jindal';
 var txt3 = txt1 + txt2;
 // console.log(txt3) ==> 'Bobby Jindal' //
 // NOTE: txt1 += txt2 would concatenate txt1 and txt2 under the variable txt1 //

// 2. String methods //

/* There are many methods to be used with strings.
 * Here is a list of string methods and their functions.
 * 
 * string.length => returns the length of a string
 * indexOf('string') => returns the index of the first occurence of specified text in a string
 * lastIndexOf() => returns the index of the last occurence of the string
 * slice() => extracts part of a string and returns the extracted part of the string
 * takes two parameters; the first is the starting index, the second is the ending index.
 * If the parameter is negative, it starts from the end of the string.
 */