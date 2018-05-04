function titleCase(str) {
  var array = str.toLowerCase().split(" ");
  var result = []
  array.forEach(function(word) {
      var wordArray = word.split("");
      wordArray[0] = wordArray[0].toUpperCase();
      result.push(wordArray.join(""));

    });
  return result.join(" ");
}


titleCase("I'm a little tea pot");