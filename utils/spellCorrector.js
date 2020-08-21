const SpellCorrector = require("spelling-corrector");
const spellCorrect = new SpellCorrector();
spellCorrect.loadDictionary();

function corrector(sentence){
    console.log(sentence);
    sentence.forEach((elements,index)=>{
        sentence[index] = spellCorrect.correct(elements);
    })

    return sentence;
}

module.exports = corrector;