const commentPost = document.getElementById("commentPost");
const commentText = document.getElementById("commentText");
const userComments = document.querySelector(".user-comments");

commentPost.addEventListener("click",(e)=>{
    e.preventDefault();

    let comments = localStorage.getItem("comments");
    if(comments ===  null)
        commentsObject = [];
    else
        commentsObject = JSON.parse(comments);
    
    if(commentText.value == "")
    alert("Please enter some text !");
    else
    commentsObject.push(commentText.value);
    
    localStorage.setItem("comments",JSON.stringify(commentsObject));

    //Display Comments
    displayComments(commentsObject);

    //For making textbox empty !
    commentText.value = "";
})


function displayComments(comments){
    let html = ""
    comments.forEach(element => {
        html += `<div class="commentBox">
            <p>Aditya Says</p>
            <h2>${element}</h2>
        </div>`
    });

    userComments.innerHTML = html;
}

window.addEventListener("load",()=>{
    const comments = localStorage.getItem("comments");

    if (comments === null){
        commentsObj = [];
    }    
    else
        commentsObj = JSON.parse(comments);

    displayComments(commentsObj);
})

