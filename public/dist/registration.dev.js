"use strict";

// Registration
var register = document.querySelector("#registerBtn");
var remail = document.querySelector(".registerEmail");
var repassword = document.querySelector(".registerPassword"); // Registration Form Submission

register.addEventListener("click", function (e) {
  e.preventDefault();
  var options = {
    method: 'POST',
    body: JSON.stringify({
      email: remail.value,
      password: repassword.value
    }),
    headers: new Headers({
      'Content-Type': 'Application/json'
    })
  };
  fetch("/register", options).then(function (res) {
    return res.json();
  }).then(function (result) {
    if (result.email) location.replace("/home");else {
      document.querySelector(".notify").style.display = "block";
      setInterval(function () {
        document.querySelector(".notify").style.display = "none";
      }, 5000);
    }
  })["catch"](function (err) {
    return console.log(err);
  });
  remail.value = "";
  repassword.value = "";
});