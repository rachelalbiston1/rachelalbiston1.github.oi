class Button{
    constructor(x,y,w,h,c1,c2,c3,s){
        this.x=x; 
        this.y=y;
        this.w=w;
        this.h=h;
        this.fill=c1;
        this.stroke=c2;
        this.over=c3;
        this.selected=s;

        this.xMouse = 0;
        this.yMouse = 0;
 
        this.mouseDown = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        this.change = false;
        this.insideBoundary = false;
    }

mDown(e){
    this.mouseDown = true;
    }

mMove(e){
    this.xMouse = e.offsetX;
    this.yMouse = e.offsetY;
    this.insideBoundary = this.checkRectBound(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    console.log(this.insideBoundary);
}

mUp(e){
    this.mouseDown = false;
    this.change = false;
    // console.log("mouse up event");
}

update(){
    this.draw()
}

draw(){
    if (this.insideBoundary == true){
        ctx.fillStyle = this.over;
    }else{
        ctx.fillStyle = this.fill;
    }
    ctx.beginPath();
    ctx.rect(this.x,this.y, this.w, this.h);
    ctx.fill();
}

checkRectBound(xM, yM, x, y, w, h){
    if (xM>x && xM<x+w && yM>y && yM<y+h){
        return true;
    }else{
        return false;
    }
}
}