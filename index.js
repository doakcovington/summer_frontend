// http://localhost:3000/api/v1/posts
console.log("We Don't Go To Ravenholm")

const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () => {
    fetch(endPoint)
      .then(res => res.json())
      .then(json => console.log(json));
  });
  