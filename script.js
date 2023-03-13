function toggleBar () {
    const outerGrid = document.querySelector(".outer-grid");
    const navBar = document.querySelector(".nav-bar");
    outerGrid.classList.toggle("outer-grid-hidden-nav");
    navBar.classList.toggle("hidden-nav");
}