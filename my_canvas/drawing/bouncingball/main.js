console.log("main is called"); 

objectSet = [];

var BBOne = new BouncingBall(300, 200, 190, 270, colArray[0][6], 10, 3, -2);
var BBTwo = new BouncingBall(320, 200, 150, 270, colArray[0][4], 10, -3, 1);
var BBThree = new BouncingBall(300, 200, 190, 270, colArray[0][8], 10, 5, 2);
objectSet.push(BBOne, BBTwo, BBThree);

function animate(){
    ctx.clearRect(0, 0, width, height);
    
    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
    
}
animate();