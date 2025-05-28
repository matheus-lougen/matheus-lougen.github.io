function toggleTheme() {
    var bodyElement = document.getElementById("body");
    if ( bodyElement.classList.contains("theme-dark") ) {
        bodyElement.className = "theme-light";
    } else {
        bodyElement.className = "theme-dark";
    }
}