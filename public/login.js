// Login
const login = document.querySelector("#loginBtn");
const lomail = document.querySelector(".loginEmail");
const lopassword = document.querySelector(".loginPassword");

//Login Form submission
login.addEventListener("click",(e)=>{
    e.preventDefault();

    const options = {
        method : 'POST',
        body : JSON.stringify({
            email : lomail.value,
            password : lopassword.value
        }),
        headers : new Headers({'Content-Type' : 'Application/json'})
    }

    fetch("/login",options)
    .then(res=>res.json())
    .then((result)=>{
        console.log(result);
    })
    .catch(err=>console.log(err));

    lomail.value = "";
    lopassword.value = "";
})