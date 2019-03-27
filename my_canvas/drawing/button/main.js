console.log("main js called");

var myRectangle = new Rectangle(300,100,100,100, colArray[2][6], colArray[1][3], colArray[2][4]);

    function animate(){
        ctx.clearRect(0, 0, width, height);
        myRectangle.update();
    
        window.requestAnimationFrame(animate);
    
    }
    
    animate();   