$(document).ready(function () {
    $(".locker").click(function () {
        $(".locker").not(this).removeClass("active");
        $(this).toggleClass("active");
    });
    $(".circle").click(function (e) {
        e.stopPropagation()
        console.log(4);
        $(this).parents(".locker").addClass("empty");
        $(this).hide().siblings(".circle").hide();
        blinkChange("Red")
    });
});
function blinkChange(color) {
    $(".blinker").css("background-color", color);
    if (color === "Red") {
        $(".locker").removeClass("active").addClass("disabled");
    }
    else {
        $(".locker").removeClass("disabled");
    }
}
