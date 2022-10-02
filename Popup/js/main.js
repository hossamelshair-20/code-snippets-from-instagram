let popup = document.querySelector(".popup"),
    openBtn = document.querySelector("#open-popup"),
    closeBtn = document.querySelector("#close-btn");

openBtn.addEventListener("click", function () {
    popup.classList.add("active");
    let overlay = document.createElement("div");
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
});

closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
    document.querySelector(".overlay").remove();
});