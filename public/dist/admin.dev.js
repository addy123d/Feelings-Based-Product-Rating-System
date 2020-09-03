"use strict";

var productName = document.querySelector(".product_name");
var productPrice = document.querySelector(".product_price");
var uploadButton = document.querySelector("#upload_button");
var image = document.images[0];
var url = document.querySelector(".url");
url.addEventListener("input", function () {
  image.style.display = "flex";
  image.src = url.value;
});
uploadButton.addEventListener("click", function (e) {
  e.preventDefault();
  var options = {
    method: 'POST',
    body: JSON.stringify({
      name: productName.value,
      price: productPrice.value,
      src: url.value
    }),
    headers: new Headers({
      'Content-Type': 'Application/json'
    })
  };
  fetch("/home", options).then(function (res) {
    return res.json();
  }).then(function (result) {
    console.log(result);

    if (result === "Posted Successfully !") {
      document.querySelector(".notify").style.display = "flex";
      document.querySelector(".notify").innerHTML = "<h2> ".concat(result, " </h2>");
      location.replace("/home");
    } else {
      document.querySelector(".notify").style.display = "flex";
      document.querySelector(".notify").innerHTML = "<h2> ".concat(result, " </h2>");
    }
  })["catch"](function (err) {
    return console.log(err);
  }); // Empty Text Field

  productName.value = "";
  productPrice.value = "";
  url.value = "";
  image.src = "";
});