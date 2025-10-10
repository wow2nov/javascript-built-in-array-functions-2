function isPalindrome(string) {
  // Start coding here
 const newSplitString = string.split('');
 const newReversedString = newSplitString.reverse();
 const newJoinString = newReversedString.join('');
 return string.trim() === newJoinString;

}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false