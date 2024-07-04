const blogArray = JSON.parse(localStorage.getItem("posts")) || []
const blogElement = document.getElementById("blog")

for (let i = 0; i < blogArray.length; i++) {
    const post = blogArray[i];

    const title = document.createElement("h2")
    title.textContent = post.title
    blogElement.append(title)

    const text = document.createElement("h4")
    text.textContent = post.text

    blogElement.append(text)

    const username = document.createElement("p")
    username.textContent = post.username
    blogElement.append(username)

    title.style.borderStyle = "solid";

}

function mode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
  }

