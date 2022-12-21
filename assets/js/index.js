function myBurgernav() {
    var navBurger = document.getElementById("myBurgernav");

    if (navBurger.style.display === "block") {
        navBurger.style.display = "none";
    } else {
        navBurger.style.display = "block";
    }
}