// テキスト「キーボード操作に反応する」
let x, y;
let speed = 1;
let jump = false;
let g = 50;
let high_point = false;
function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}


function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5 * speed; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5 * speed; }
  if(keyIsDown(UP_ARROW)){ y -= 5 * speed; }
  if(keyIsDown(DOWN_ARROW)){ y += 5 * speed; }
  if(keyIsDown(SHIFT) && (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW))){ speed = 5; }else{
    speed = 1;
  }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown(" ".charCodeAt(0)) && y == height - 25){
    jump = true;
  }
  if(jump){
    if(high_point){
      if(y == height -25){
        high_point = false;
        jump = false;
        g = 50;
      }else{
        x = x - 3;
        y = y + g 
        g = g + 2;
      }
    }else{
      x = x - 3;
      y = y - g;
      g = g - 2;
      if(g == 0){
        high_point = true;
      }  
    }
  }
  x = constrain(x, 25, width-25);
  y = constrain(y, 25, height-25);
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
