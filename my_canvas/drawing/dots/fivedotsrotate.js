// create the class with constructor 
// include the functions only with console logs 
// test at this stage for problems 
console.log("Five dot rotate called");

class FiveDotsRotate{
    constructor(xC, yC, s, c1, c2, c3, ang){
        this.xC = xC;
        this.yC = yC;
        this.s = s;
        this.r = s/8;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.ang = ang;
}

update(){
    this.draw()
    }

draw(){
    ctx.save()
    ctx.translate(this.xC, this.yC);
    ctx.rotate(this.ang*Math.PI/180);

    ctx.beginPath();

    ctx.rect( - this.s/2, - this.s/2, this.s, this.s);
    ctx.fillStyle = this.c1;
    ctx.fill();
    // top left
    this.drawCircle( -this.s/2, -this.s/2, this.r, this.c2);
    // top right
    this.drawCircle( this.s/2, -this.s/2, this.r, this.c2);
    // bottom left
    this.drawCircle( -this.s/2, +this.s/2, this.r, this.c2);
    // bottom right 
    this.drawCircle( this.s/2, +this.s/2, this.r, this.c2);
    // centre C
    this.drawCircle(0, 0, this.r, this.c3); 
    ctx.restore();

}

drawCircle(x,y,r,col){
    ctx.beginPath();
    ctx.arc(x,y,r,0, 2*Math.PI);
    ctx.fillStyle = col;
    ctx.fill();
}

}