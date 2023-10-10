// // チェッカー
// function setup() {
//   createCanvas(200, 200);
//   let size = width / 8;
//   noStroke();
//   for(let i = 0; i < 8; i++){
//     for(let j = 0; j < 8; j++){
//       // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
//     }
//   }
// }

function setup() {
  let s = 50;
  let d = 40;
  createCanvas(400, 400);
  background(255);
}

let counter = 0;
function createsha(x,y,a,b){
  noStroke();
  if(a%2==0 && b%2==1 || a%2==1 && b%2 == 0){
    fill("gray");
    square(x,y,50);
    if(counter<24){
      fill("red");
      circle(x+25,y+25,48)
    }
    if(counter>=40){
      fill("black");
      circle(x+25,y+25,48);
    }
  }else{
    fill("white");
    square(x,y,50);
  }
}


function draw() {
  let x = 0;
  let y = 0;
  for(let a = 0;a<8;a++){
    for(let b = 0;b<8;b++){
      createsha(x,y,a,b);
      x = x + 50;
      counter++;
    }
    x = 0;
    y = y + 50;
  }
  noLoop();
}

