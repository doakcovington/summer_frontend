//const { func } = require("prop-types");

// http://localhost:3000/api/v1/posts
console.log("We Don't Go To Ravenholm")

const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () => {
    getPosts();

    const createPostForm = document.querySelector("#create-post-form");

    createPostForm.addEventListener("submit", (e) => createFormHandler(e))
  });

function getPosts() {
    fetch(endPoint)
    .then(res => res.json())
    .then(posts => { 
        posts.data.forEach(post => {
            const postMarkup = `
                <div data-id=${post.id}>
                    <h3>${post.attributes.title}</h3>
                    <img src=${post.attributes.image_url}>
                    <p>${post.attributes.caption}</p>
                </div>
            `; //end of postMarkup
            document.querySelector('#post-container').innerHTML += postMarkup;
        })
    });
}

function createFormHandler(e) {
    e.preventDefault();
    const titleInput = document.querySelector('#input-title').value
    const captionInput = document.querySelector('#input-caption').value
    const imageInput = document.querySelector('#input-image').value
    const categoryInput = document.querySelector('#categories').value
    const categoryId = parseInt(categoryInput)
    submitPost(titleInput, captionInput, imageInput, categoryInput)
}

function submitPost(title, caption, image_url, category_id) {
    console.log(title, caption, image_url, category_id);

    let bodyData = {title, caption, image_url, category_id}

    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(resp => resp.json())
    .then(post => {
        console.log(post);
    })
}