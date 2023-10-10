// // 小手調べ
// function setup(){
//   for(let i = 0; i < 10; i++){
//     // BLANK[1]
//   }
// }
function setup() {
  createCanvas(120, 120);
  background(255);
}
function draw() {
  var d = 6;
  for(var a = 0; a < 10; a++){
    strokeWeight(1)
    noFill();
    if(a<5){
      stroke("blue");
    }
    else{
      stroke("red");

    }
    circle(60,60,d);
    d = d + 6;
    console.log(d);
  }
  noLoop();
}
