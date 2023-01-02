//Post

import { postsArr } from "./data.js"

let postPage = document.getElementById("postPage")
let recentPosts = document.getElementById("recentPosts")

const selectedPostId = JSON.parse(localStorage.getItem('clickedPostId'))

const selectedPost = postsArr.filter(function(post){
    return post.id === selectedPostId
}) [0]
console.log(selectedPost)


console.log(JSON.stringify(selectedPost.fullArticle).split('\n'))


function singlePostHTML(){
    let singlePostHTML = 
    `<p class="date">${selectedPost.date}</p>
        <h1 class="title">${selectedPost.title}</h1>
        <p class="description">${selectedPost.description}</p>
        <img src="${selectedPost.image}" alt="computer" class="pp postImg">

        <p class="articleContent">${(selectedPost.fullArticle)}</p>`
        return singlePostHTML
}

function renderSinglePost(){
    postPage.innerHTML = singlePostHTML()
    
}

renderSinglePost()


function getRecentPosts(){
    let recentPosts = ``

    postsArr.forEach(function(post){
        recentPosts += `<div Id="${post.id}" class="singlePost">
        <img class="post-img" src="${post.image}" alt="Post photo">
        <p class="date">${post.date}</p>
        <h1 class="title">${post.title}</h1>
        <h5 class="description">${post.description}</h5>
    </div>`
    })
    return recentPosts
}

function renderLatestPosts(){
    recentPostsDiv.innerHTML = getRecentPosts()
}

renderLatestPosts()