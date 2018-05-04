
var arr = 'hello how are you?';
arr = arr.split(" "); // ["hello", "how", "are", "you?"]
var result=[];
arr.forEach(function(word) {
  var wordArray = word.split(""); // ["h", "e", "l", "l", "o"]
  wordArray[0] = wordArray[0].toUpperCase(); // ["H", "e", "l", "l", "o"]
  capWord = wordArray.join("");
	result.push(capWord); // ["Hello", "How", "Are", "You?"]
})

result.join(" ") // "Hello How Are You?"