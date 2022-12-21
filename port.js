let canvas  = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "|.";
let matrix = str.split("");
let font = 9;
let col = width / font;
let arr =  [.2];

for(let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0, 0.1)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.990) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 10);

window.addEventListener("resize", () => location.reload());