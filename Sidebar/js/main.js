let sidebar = document.querySelector("aside"),
    btn = document.querySelector("aside .btn-menu");
btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})