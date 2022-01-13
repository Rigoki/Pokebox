let cardImg = document.getElementById("cardImg");
let cardTxt = document.getElementById("cardTxt");
let cardCom = document.getElementById("cardCom");
let myGalerie = document.getElementById("galerie");
myGalerie.addEventListener("click", function(e) {
    if (!e.target.src) {} else {
        let img = e.target.src;
        cardImg.innerHTML = "<img src=" + img + " class='rounded'>";
        let name = e.target.name;
        cardTxt.innerHTML = "<h2> " + name + "</h2>";
        let com = e.target.alt;
        cardCom.innerHTML = "<p>" + com + "</p>";
    }
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})