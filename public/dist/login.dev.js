"use strict";

// Login
var login = document.querySelector("#loginBtn");
var lomail = document.querySelector(".loginEmail");
var lopassword = document.querySelector(".loginPassword"); //Login Form submission

login.addEventListener("click", function (e) {
  e.preventDefault();
  var options = {
    method: 'POST',
    body: JSON.stringify({
      email: lomail.value,
      password: lopassword.value
    }),
    headers: new Headers({
      'Content-Type': 'Application/json'
    })
  };
  fetch("/login", options).then(function (res) {
    return res.json();
  }).then(function (result) {
    console.log(result);
  })["catch"](function (err) {
    return console.log(err);
  });
  lomail.value = "";
  lopassword.value = "";
});