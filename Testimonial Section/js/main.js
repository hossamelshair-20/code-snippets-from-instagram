let userText = document.querySelectorAll(".user"),
    userImg = document.querySelectorAll(".user-img");

userImg.forEach(e => {
    e.addEventListener("click", e => {
        for (img of userImg) {
            img.classList.remove("active");
        }
        for (text of userText) {
            text.classList.remove("active");
        }
        let i = Array.from(userImg).indexOf(event.target);
        userImg[i].classList.add("active");
        userText[i].classList.add("active");
    })
});