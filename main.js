function duplicateEncode(word){
    word = word.toLowerCase()
    let unique = new Set(word.split(''))
   
    function countChar (str,char){
      let count = 0
      for(let i = 0 ; i < str.split('').length ; i++ ){
        if( char == str.split('')[i])
          count = count + 1
      }
      return count
    }
    
    return word.split('').map(x => countChar(word,x) > 1 ? ")" : '('  ).join('')
    }



/*
6kyu Duplicate Encoder


The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript