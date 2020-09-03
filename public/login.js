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
        if(result.email)
        location.replace("/home");
    else{
        document.querySelector(".notify").style.display = "block";
        document.querySelector(".notify").innerHTML = `<h2>${result}</h2>`;
        setInterval(()=>{
            document.querySelector(".notify").style.display = "none";
        },5000)
    }
    })
    .catch(err=>console.log(err));

    lomail.value = "";
    lopassword.value = "";
})