console.log("main js is called");

var myT = new TestObject(canvas);

//this is the base code for the animation loop
//it is running but at present not having any impact
//the listeners in the object are independant of the animation loop

function animate(){
    ctx.clearRect(0, 0, width, height);

    window.requestAnimationFrame(animate);

}

animate();