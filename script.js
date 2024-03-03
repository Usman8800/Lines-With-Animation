var elem = document.querySelectorAll(".elem")

elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove", function (dts) {
        val.childNodes[3].style.left = dts.x + "px"
       
    });
})