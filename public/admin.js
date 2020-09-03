const productName = document.querySelector(".product_name");
const productPrice = document.querySelector(".product_price");
const uploadButton = document.querySelector("#upload_button");

const image = document.images[0];
const url = document.querySelector(".url");

url.addEventListener("input",()=>{
    image.style.display = "flex";
    image.src = url.value;
})


uploadButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const options = {
        method  : 'POST',
        body : JSON.stringify({
            name : productName.value,
            price : productPrice.value,
            src : url.value
        }),
        headers : new Headers({ 'Content-Type' : 'Application/json' })
    }


    fetch("/home", options)
    .then( res=> res.json())
    .then((result)=>{
        console.log(result);
        if(result === "Posted Successfully !"){
            document.querySelector(".notify").style.display = "flex";
            document.querySelector(".notify").innerHTML = `<h2> ${result} </h2>`;
            location.replace("/home");
        }else{
            document.querySelector(".notify").style.display = "flex";
            document.querySelector(".notify").innerHTML = `<h2> ${result} </h2>`;
        }
    })
    .catch(err => console.log(err));


    // Empty Text Field
    productName.value = "";
    productPrice.value = "";
    url.value = "";
    image.src = "";
})