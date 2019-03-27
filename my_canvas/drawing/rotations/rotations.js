function drawRectangle (x,y,w,h, fillC, strokeC, lw, fill, stroke){
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }

    if(stroke == true){
        ctx.lineWidth = lw;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

// drawCircle x,y,r, fillC, strokeC, lw, fill(boolean), stroke(boolean)
function drawCircle(x,y,r, fillC, strokeC, lw, fill, stroke){
    ctx.beginPath();
    ctx.arc (x,y,r, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();

    }
    if(stroke == true){
        ctx.lineWidth = lw;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}

ctx.save();
ctx.translate(300,80);
ctx.rotate(30*Math.PI/180);
drawCircle(0,0, 20, "", colArray[1][6], 2, false, true);
drawRectangle(0,0, 100, 200, colArray[0][4], colArray[1][5], 5, true, true);
ctx.restore();

ctx.save();
ctx.translate(500,200);
for (var i=0; i<360; i+=15){
    ctx.rotate(15*Math.PI/180);
    drawRectangle(0,0, 80, 80, colArray[2][6], colArray[1][5], 2, true, true); 
}
ctx.restore();


ctx.save();
ctx.translate(150,400);
for (var i=0; i<360; i+=15){
    ctx.rotate(50*Math.PI/180);
    drawRectangle(0,0, 30, 30, colArray[2][6], colArray[1][5], 1, true, true); 
}
ctx.restore();
