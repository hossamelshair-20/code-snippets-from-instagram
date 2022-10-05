let btn = document.querySelector(".upbtn");

window.onscroll = function () {
    if (this.scrollY >= 300) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }
}

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}