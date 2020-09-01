"use strict";

var commentPost = document.getElementById("commentPost");
var commentText = document.getElementById("commentText");
var userComments = document.querySelector(".user-comments");
commentPost.addEventListener("click", function (e) {
  e.preventDefault();
  var comments = localStorage.getItem("comments");
  if (comments === null) commentsObject = [];else commentsObject = JSON.parse(comments);
  if (commentText.value == "") alert("Please enter some text !");else commentsObject.push(commentText.value);
  localStorage.setItem("comments", JSON.stringify(commentsObject)); //Display Comments

  displayComments(commentsObject); //For making textbox empty !

  commentText.value = "";
});

function displayComments(comments) {
  var html = "";
  comments.forEach(function (element) {
    html += "<div class=\"commentBox\">\n            <p>Aditya Says</p>\n            <h2>".concat(element, "</h2>\n        </div>");
  });
  userComments.innerHTML = html;
}

window.addEventListener("load", function () {
  var comments = localStorage.getItem("comments");

  if (comments === null) {
    commentsObj = [];
  } else commentsObj = JSON.parse(comments);

  displayComments(commentsObj);
});