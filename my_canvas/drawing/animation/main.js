console.log("main is called");

var BB = new Ball(300,300,20, colArray[0][6]);

var count = 0;
function animate(){
    ctx.clearRect(0, 0, width, height);
    count +=1;
    count = count%100;
    BB.update();



window.requestAnimationFrame(animate);
}
animate();


/* var BBox = new BallInBox (50,50 300, 200, 10, colArray[0][8]);
BBox.update();

var count = 0;
function nimate(){
    ctx.clearRect(0, 0, width, height);
    count +=1;

    count = count%1000;
    // BB.update()
    // BBox.update();
    // console.log(count);

    window.requestAnimationFrame(animate);
}
animate();*/