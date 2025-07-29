function isPalindrome(string) {
   let result = string.split('')
               .reverse()
               .join('')
return result.trim() === string.trim() ?  true : false
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false