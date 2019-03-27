console.log("main1 js is called");

var myT = new ControlObject(canvas);
//var ROne = new Rectangle(100,100,200,200, "rgba(255,0,0,1)");

//this is the base code for the animation loop
//it is running but at present not having any impact
//the listeners in the object are independant of the animation loop

function animate(){
    ctx.clearRect(0, 0, width, height);
    myT.update();
    //ROne.update();

    window.requestAnimationFrame(animate);

}

animate();