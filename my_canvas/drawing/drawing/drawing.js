console.log("drawing js called");
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// complete drawing of a rectangle 
ctx.strokeStyle = "rgb(100,100,100)";
ctx.fillStyle = 'rgb(253, 184, 238)';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(100, 100, 300, 50);
ctx.stroke();
ctx.fill();

// complete drawing of a rectangle 
ctx.strokeStyle = "rgb(100,100,100)";
ctx.fillStyle = 'rgb(253, 184, 238)';
ctx.lineWidth = 8;
ctx.beginPath();
ctx.rect(400, 300, 200, 100);
ctx.stroke();
ctx.fill();

// complete drawing of a circle 
ctx.fillStyle="rgb(100,100,100)";
ctx.strokeStyle="rgb(253, 184, 238)";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(600,100,50,0,2*Math.PI);
ctx.stroke();
ctx.fill();

// add text
ctx.fillStyle="rgb(100,100,100)";
var myFont="bold 30px monospace";
ctx.font=myFont;
ctx.fillText("hello world", 300,50);
/*
var BoxImg = new image (); // create new img element
BoxImg.src = 'image_test.png'; // Set source path 
ctx.drawImage(BoxImg, 600,10,100,100);
*/

// draw polyline with closure
ctx.strokeStyle="rgb(255,102,102)";
ctx.fillStyle="rgb(255, 255, 153)";
ctx.lineWidth=10;
ctx.beginPath();
ctx.moveTo(0,600);
ctx.lineTo(800,250);
ctx.lineTo(800,300);

// draw line
ctx.strokeStyle="rgb(100,100,100)";
ctx.fillStyle="rgb(255,102,102)";
ctx.lineWidth=6;
ctx.beginPath();
ctx.moveTo(0,500);
ctx.lineTo(500,500);
ctx.lineTo(900,500);
ctx.lineTo(300,450);
ctx.closePath();
ctx.stroke();
ctx.fill();

