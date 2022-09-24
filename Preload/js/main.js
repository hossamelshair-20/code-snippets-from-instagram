const fadeOut = () => {
    const loading = document.querySelector(".loading");
    loading.classList.add("fade");
}

window.addEventListener("load", fadeOut);