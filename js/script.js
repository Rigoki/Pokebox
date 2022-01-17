/*JS*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    /*JQ*/
$(function() {
    $("#troll").hide()
    $('#feu').on({
        click: () => {
            $("#galerie img:not('.feu')").fadeTo(100, 0.4).css("pointer-events", "none");
            $(".feu").fadeTo(100, 1).css("pointer-events", "auto")
        }
    })
    $('#plante').on({
        click: () => {
            $("#galerie img:not('.plante')").fadeTo(100, 0.4).css("pointer-events", "none")
            $(".plante").fadeTo(100, 1).css("pointer-events", "auto")
        }
    })
    $('#eau').on({
        click: () => {
            $("#galerie img:not('.eau')").fadeTo(100, 0.4).css("pointer-events", "none")
            $(".eau").fadeTo(100, 1).css("pointer-events", "auto")
        }
    })
    $('#reset').on({
        click: () => {
            $("#galerie img").fadeTo(100, 1).css("pointer-events", "auto")
        }
    })
    $("#galerie").on({
        click: (e) => {
            if (!e.target.src) {} else {
                $("#troll").hide().delay(1000).fadeIn(1000);
                let name = e.target.name;
                $("#cardTxt").hide().html("<h2> " + name + "</h2>").slideDown(400);
                let img = e.target.src;
                $("#cardImg").hide().delay(300).html("<img src=" + img + " class='rounded'>").fadeIn(900);
                let com = e.target.alt;
                $("#cardCom").hide().delay(600).html("<p>" + com + "</p>").fadeIn(1000)
            }
        }
    })
    $("#troll").on({
        click: () => {
            $("#audio")[0].play();
            $("#troll img").animate({
                width: "-=2em",
                height: "-=2em",
            }).animate({
                width: "+=2em",
                height: "+=2em"
            })
        }
    })
})