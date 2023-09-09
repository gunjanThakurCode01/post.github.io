let stranger = document.querySelector('h5')

let btn = document.querySelector('button')

let color = "r"


btn.addEventListener("click", function(){
    if(color == "r"){
        stranger.innerHTML = "Friends"
        stranger.style.color = "rgb(32, 185, 32)"
        btn.innerHTML = "Unfollow"
        color = "g"
    }

    else{
        stranger.innerHTML = "Stranger"
        stranger.style.color = "red"
        btn.innerHTML = "Follow"
        color ="r"
    }
})



let con = document.querySelector(".container")
let like = document.querySelector("i")

con.addEventListener("dblclick", function() {
    like.style.transform = "scale(2)"

    setTimeout(function(){
        like.style.transform = "scale(0)"
    },1000)
})


