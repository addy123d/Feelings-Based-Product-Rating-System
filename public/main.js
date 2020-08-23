    const container = document.querySelector(".container");
    const searchQuery = document.getElementById("query");
    searchQuery.addEventListener("input",()=>{
        const inputText = searchQuery.value;
        const casedInputText = inputText.toLowerCase();
        const cards = document.getElementsByClassName("card");
        Array.from(cards).forEach((element)=>{
            const matchingText = element.getElementsByTagName("h2")[0].innerText;
            const casedMatchingText = matchingText.toLowerCase();
            if(casedInputText.includes(casedMatchingText)){
                element.style.display = "block";
                container.style.width = "500px";
            }else
                element.style.display = "none";
        })
    })