// Registration
const register = document.querySelector("#registerBtn");
const remail = document.querySelector(".registerEmail");
const repassword = document.querySelector(".registerPassword");





// Registration Form Submission
register.addEventListener("click",(e)=>{
    e.preventDefault();

    const options = {
        method : 'POST',
        body : JSON.stringify({
            email : remail.value,
            password : repassword.value
        }),
        headers : new Headers({'Content-Type' : 'Application/json'})
    }

    fetch("/register",options)
    .then(res=>res.json())
    .then((result)=>{
        if(result.email)
            location.replace("/home");
        else{
            document.querySelector(".notify").style.display = "block";
            setInterval(()=>{
                document.querySelector(".notify").style.display = "none";
            },5000)
        }
    })
    .catch(err=>console.log(err));

    remail.value = "";
    repassword.value = "";
})



