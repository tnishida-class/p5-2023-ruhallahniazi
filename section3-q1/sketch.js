// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let speed = 1;
let count = 0;
let fast = false;
let width = 200;
let height = 200;
let size = 20;
let bol = true;
function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);
  if (keyIsPressed === true) {
    speed = speed + 0.01;
  } else {
    speed = 1;
  }
  if(bol){
    size = size + 1 * speed;
    if(size > 170){
      bol = false; 
    }
  }else{
    size = size -1 * speed;
    if(size < 20){
      bol = true;
    }
  }
  ellipse(width / 2, height / 2, size);
}
