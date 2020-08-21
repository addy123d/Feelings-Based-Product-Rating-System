const apostoLexform = require("apos-to-lex-form");

function normaliser(sentence){
    console.log(sentence);
    const lexformReview = apostoLexform(sentence);
    const casedReview = lexformReview.toLowerCase();
    const onlyAlphaReview = casedReview.replace(/[^a-zA-Z\s]+/g," ");
    return onlyAlphaReview;
}

module.exports = normaliser;