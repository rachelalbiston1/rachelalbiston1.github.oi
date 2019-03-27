console.log("main is called");
var objectSet = [] // empty array (aka list)
var FDOne = new FiveDots(350, 90, 105, colArray[0][7], colArray[1][5], colArray[1][5]);
var FDTwo = new FiveDots(180, 300, 150, colArray[1][3], colArray[0][7], colArray[0][2]);
var FDThree = new FiveDots(600, 280, 200, colArray[2][4], colArray[1][6], colArray[2][6]);
var FDFour = new FiveDots(360, 500, 120, colArray[2][6], colArray[1][1], colArray[1][3]);
objectSet.push( FDOne, FDTwo, FDThree, FDFour );
objectSet.push(new FiveDotsRotate(120, 100, 80, colArray[2][6], colArray[1][4], colArray[2][7], 60 ) );
console.log(objectSet);
for(var i = 0 ; i< objectSet.length ; i++ ){
    objectSet[i].update();
    }
