// http://localhost:3000/api/v1/posts
console.log("We Don't Go To Ravenholm")

const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () => {
    getPosts();
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
  