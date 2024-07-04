let submitBtn = document.getElementById("submit")
const username = document.getElementById("username") 
const title = document.getElementById("title") 
const text = document.getElementById("content") 

const blogArray = JSON.parse(localStorage.getItem("posts")) || []



function userInput(event) {
console.log(event);
event.preventDefault()
const userData = {
    username: username.value,
    title: title.value,
    text: text.value,
}
blogArray.push(userData)
localStorage.setItem("posts", JSON.stringify(blogArray))
}

submitBtn.addEventListener("click", userInput)

function mode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
  }
