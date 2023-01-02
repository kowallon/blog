//About me

import { postsArr } from "./data.js"

let recentPostsDiv = document.getElementById("recentPosts")




function getRecentPosts(){
    let recentPosts = ``

    postsArr.slice(-3).reverse().forEach(function(post){
        recentPosts += `
        <a href="postPage.html">
            <div data-id="${post.id}"" class="singlePost">
                <img class="post-img" src="${post.image}" alt="Post photo" data-id="${post.id}">
                <p class="date" data-id="${post.id}">${post.date}</p>
                <h1 class="title" data-id="${post.id}">${post.title}</h1>
                <h5 class="description" data-id="${post.id}">${post.description}</h5>
            </div>
        </a>`
    })
    return recentPosts
}

function renderLatestPosts(){
    recentPostsDiv.innerHTML = getRecentPosts()
}

document.addEventListener("click", function(e){
    if(e.target.dataset.id){
    console.log()
    openPost(e.target.dataset.id)

    window.location.href = "postPage.html"
    }

    else if (e.target.dataset.nav){
        window.location.href = "index.html"
    }
})

function openPost(postId){
    let selectedPost = postsArr.filter(function(post){
        return post.id == postId
    })[0]
    localStorage.setItem("clickedPostId", JSON.stringify(selectedPost.id))
    
}

renderLatestPosts()



