const stoppingWord = require("stopword");

function removeStopword(sentence){
    console.log(sentence);
    const filteredsentence = stoppingWord.removeStopwords(sentence);
    return filteredsentence;
}

module.exports = removeStopword;