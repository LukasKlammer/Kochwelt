function showMenu() {
    let transformLogo = document.querySelector('#header-logo');
    let showMenu = document.querySelector('#responsive-menu');
    transformLogo.classList.remove("header-logo-transition-out");
    transformLogo.classList.remove("header-logo-transition");

    if (showMenu.classList.contains("show-responsive-menu")) {
        transformLogo.classList.add("header-logo-transition-out");
        showMenu.classList.remove("show-responsive-menu");
    } else if (!showMenu.classList.contains("show-responsive-menu")) {
        transformLogo.classList.add("header-logo-transition");
        showMenu.classList.add("show-responsive-menu");
    }

}