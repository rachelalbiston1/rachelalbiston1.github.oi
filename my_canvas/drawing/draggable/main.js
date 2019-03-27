console.log("main js is called");

var myCircle = new Circle(200, 200, 60, colArray[2][6]);

    function animate(){
        ctx.clearRect(0, 0, width, height);
        myCircle.update();
    
        window.requestAnimationFrame(animate);
    
    }
    
    animate();   