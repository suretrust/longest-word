function longest(sentence){
  
    var str = sentence.split(" ");
    var longest = 0;
    var word = null;
  
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}