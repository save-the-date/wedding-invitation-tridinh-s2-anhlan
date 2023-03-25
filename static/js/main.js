const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    const rd = Math.floor((Math.random() * 10) % 2);
    if (rd == 0) {
        heart.style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        heart.style.color = "rgba(243, 202, 225, 0.5)";
    }
    
    heart.style.left = (Math.random() * 93) + "vw";
    heart.style.fontSize = (Math.random() * 5) + 25 + "px";
    heart.style.animationDuration = (Math.random() * 100) + 10 + "s";
    body.appendChild(heart);
}
setInterval(createHeart, 400);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 300) {
       heartArr[0].remove();
    }
    for (let index = 0; index < heartArr.length; index++) {
        var curHeart = heartArr[index];
        var rect = curHeart.getBoundingClientRect();
        if (rect.bottom > document.documentElement.clientHeight) {
            curHeart.remove();
        }
    }
}, 400)