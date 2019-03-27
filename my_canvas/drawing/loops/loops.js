console.log('loops js is called');

// drawCircle x, y, r, fillC(rgb string), strokeC(rgb string), 
// lineWidth, fill(boolean), stroke(boolean) 
function drawCircle(x,y,r,fillC, strokeC, lineW, fill, stroke){

    ctx.beginPath();
    ctx.arc(x,y, r, 0, 2*Math.PI);
    if (fill == true){
     ctx.fillStyle = fillC;
     ctx.fill();
    }
    if(stroke == true){
    ctx.lineWidth = lineW;
    ctx.strokeStyle = strokeC;
    ctx.stroke();
    }
}

var i = 0;
drawCircle(100, 100+50*i, 20, colArray[0][4], colArray[0][6], 8, true, true ) ;
i=1;
drawCircle(100, 100+50*i, 20, colArray[0][4], colArray[0][6], 8, true, true ) ;
i=2;
drawCircle(100, 100+50*i, 20, colArray[0][4], colArray[0][6], 8, true, true ) ;
i=3;
drawCircle(100, 100+50*i, 20, colArray[0][4], colArray[0][6], 8, true, true ) ;

for(var j=0 ; j<17; j++){
    console.log(j);
    drawCircle(j*50, 20, 10, colArray[0][4], colArray[0][6], 4, true, true ) ;
}

for(var i=0 ; i<5; i++){
    console.log(i);
    drawCircle(500, 100+100*i, 40, colArray[0][4], colArray[0][6], 4, true, true ) ;
}

for(var j=0 ; j<17; j++){
    console.log(j);
    drawCircle(300, 70+ j*30, 10, colArray[0][4], colArray[0][6], 1, true, true ) ;
}

for(var j=0 ; j<45; j++){
    console.log(j);
    drawCircle(200, 70+ j*10, 5, colArray[0][4], colArray[0][6], 1, true, true ) ;
}

ctx.strokeStyle = "rgb(100,100,100)";
ctx.fillStyle = 'rgb(253, 184, 238)';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(50, 340, 100, 200);
ctx.stroke();
ctx.fill();

for (var i = 0; i<5 ; i++){

    for(var j = 0; j<5; j++){
        drawCircle(600 + 30*i, 70+ j*30, 10, colArray[0][4], colArray[0][6], 1, true, true ) ;
    }
    
}

for (var i = 0; i<5 ; i++){

    for(var j = 0; j<6; j++){
        drawCircle(600 + 30*i, 300+ j*50, 15, colArray[0][4], colArray[0][6], 1, true, true ) ;
    }
    
}

