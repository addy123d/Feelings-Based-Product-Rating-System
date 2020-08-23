const natural = require("natural");

function getPoints(sentence){
    console.log(sentence);
    const { SentimentAnalyzer, PorterStemmer} = natural;
    const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'senticon');
    const analysis = analyzer.getSentiment(sentence);

    return analysis;
}

module.exports = getPoints;