const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

interface Item{
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
}

class Cool implements Item{
    x: number;
    y: number;
    w: number;
    h: number;

}

function draw(item:Item){
    console.log(item);
    ctx.fillRect(item.x, item.y, item.w, item.h);
}

let item1 = <Cool>{x : 100, y : 100, w : 100, h : 100};

let item = <Item>{};
draw(item);
draw(item1);

