// test at this stage for problems
console.log("circle js called");

class Circle{
    constructor(x,y,r,col){
        this.x = x;
        this.y = y;
        this.r = r;
        this.fill = col;

        this.xMouse = 0;
        this.yMouse = 0;
 
        this.mouseDown = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        this.drag = false;
        this.insideBoundary = false;
}

mDown(e){
    this.mouseDown = true;
    console.log(this.insideBoundary);
    if (this.insideBoundary){
        this.drag = true;
    }
}

mMove(e){
    this.xMouse = e.offsetX;
    this.yMouse = e.offsetY;
    // update
    this.insideBoundary=this.circularBound(this.x, this.y, this.xMouse, this.yMouse, this.r);
    // call circular bound
}

mUp(e){
    this.mouseDown = false;
    this.drag = false;
}

update(){
    if (this.drag){
        this.x = this.xMouse;
        this.y = this.yMouse;
    }
    this.draw();
}

drawCircle(x,y,r,col){
    ctx.beginPath();
    ctx.arc(x,y,r, 0, 2*Math.PI);
    ctx.fillStyle = col;
    ctx.fill();
}

draw(){
    this.drawCircle(this.x,this.y,this.r,this.fill);
}

// say whether the mouse is inside the circle
// takes circle centre and x,y mouse and circle radius
circularBound(xC, yC,xM, yM, r){
    var d = Math.sqrt(Math.pow(xM-xC, 2)+Math.pow(yM-yC,2));
    if(d<r){
        return true;
    }else{
        return false;
    }
}




}
