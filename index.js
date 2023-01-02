import { postsArr } from "./data.js";

let postsDiv = document.getElementById("posts")
let viewMore = document.getElementById("viewMore")



//TO DOs:
//1. Render posts dynamicly in other way than local storage
//2. Clean the code
//3. Add comments and save them in localStorage
//4. Format fullArticle text



//Homepage

function getPostsHTML(){
    let postsHTML = ``


    postsArr.slice(0, 3).forEach(function(post){
        postsHTML += `
            <div data-id="${post.id}" class="singlePost">
                <img class="post-img" src="${post.image}" alt="Post photo" data-id="${post.id}">
                <p class="date" data-id="${post.id}">${post.date}</p>
                <h1 class="title" data-id="${post.id}">${post.title}</h1>
                <h5 class="description" data-id="${post.id}">${post.description}</h5>
            </div>`
    })
    return postsHTML

}

function renderPosts(){
    postsDiv.innerHTML = getPostsHTML()
    
}

// eventListeners

viewMore.addEventListener("click", function(){
    let postsHTML = ``
    postsArr.forEach(function(post){
        postsHTML += `
        <a href="postPage.html">
            <div data-id="${post.id}" class="singlePost">
                <img class="post-img" src="${post.image}" alt="Post photo" data-id="${post.id}">
                <p class="date" data-id="${post.id}">${post.date}</p>
                <h1 class="title" data-id="${post.id}">${post.title}</h1>
                <h5 class="description" data-id="${post.id}">${post.description}</h5>
            </div>
        </a>`
    })
    postsDiv.innerHTML = postsHTML
    viewMore.classList.add("hidden")
})

document.addEventListener("click", function(e){
    if(e.target.dataset.id){
    console.log()
    openPost(e.target.dataset.id)

    window.location.href = "postPage.html"
    }
})

function openPost(postId){
    let selectedPost = postsArr.filter(function(post){
        return post.id == postId
    })[0]
    localStorage.setItem("clickedPostId", JSON.stringify(selectedPost.id))
    
}



renderPosts()




