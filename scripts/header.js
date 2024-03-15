window.onscroll = function() {scrollFunction()};

function scrollFunction() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("header-scrolled");
    } else {
        document.getElementById("header").classList.remove("header-scrolled");
    }
}
console.log("Olá")