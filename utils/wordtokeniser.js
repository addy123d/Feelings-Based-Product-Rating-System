const natural = require("natural");

function wordTokeniser(sentence){
    console.log(sentence);
    const { WordTokenizer } = natural;
    const tokenizer = new WordTokenizer();
    const tokenizedReview = tokenizer.tokenize(sentence);
    return tokenizedReview;
}


module.exports = wordTokeniser;