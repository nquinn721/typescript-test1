var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var Cool = (function () {
    function Cool() {
    }
    return Cool;
}());
function draw(item) {
    console.log(item);
    ctx.fillRect(item.x, item.y, item.w, item.h);
}
var item1 = { x: 100, y: 100, w: 100, h: 100 };
var item = {};
draw(item);
draw(item1);
//# sourceMappingURL=main.js.map