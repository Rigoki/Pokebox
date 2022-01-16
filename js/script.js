/*JS*/
let troll = document.getElementById("troll");

troll.addEventListener('click', function() {
    var audio = document.getElementById("audio");
    audio.play();
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
/*JQ*/
$(function(){
$('#feu').on({
    click: ()=> {
        $("#galerie img:not('.feu')").fadeTo(100,0.4);
        $(".feu").fadeTo(100,1)
    }
})
$('#plante').on({
    click: ()=> {
        $("#galerie img:not('.plante')").fadeTo(100,0.4)
        $(".plante").fadeTo(100,1)
    }
})
$('#eau').on({
    click: ()=> {
        $("#galerie img:not('.eau')").fadeTo(100,0.4)
        $(".eau").fadeTo(100,1)
    }
})
$('#reset').on({
    click: ()=> {
        $("#galerie img").fadeTo(100,1)
    }
})
$("#galerie").on({
click : (e) =>{
    if (!e.target.src) {} else {
        let name = e.target.name;
        $("#cardTxt").hide().html("<h2> " + name + "</h2>").slideDown(400);
        let img = e.target.src;
        $("#cardImg").hide().html( "<img src=" + img + " class='rounded'>").fadeIn(900);
        let com = e.target.alt;
        $("#cardCom").hide().html("<p>" + com + "</p>").slideDown(1000);
    }
}
})
})