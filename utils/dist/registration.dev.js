"use strict";

var registeredUsers = []; //Get index if there is existing user

function registration(email, password) {
  var users = {}; //Get Index

  var getIndex = registeredUsers.findIndex(function (user) {
    return user.email === email;
  }); //If index is -1 then user is new , viceversa

  if (getIndex < 0) {
    users.email = email;
    users.password = password;
    registeredUsers.push(users);
    return registeredUsers;
  } else return "User already Registered !";
}

function login(email, password) {
  //Get Index
  var getIndex = registeredUsers.findIndex(function (user) {
    return user.email === email;
  }); //if index is -1 , then user is new, else index is > 0, then login process should be done !

  if (getIndex < 0) return "Something Went Wrong !";else {
    if (registeredUsers[getIndex].email === email && registeredUsers[getIndex].password === password) return "Logged In Successfully !";
  }
}

module.exports = {
  registration: registration,
  login: login
};