// テキスト「キーボード操作に反応する」
let x, y;
let speed = 1;

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
  if(keyIsDown(SHIFT)){ speed = 2; }else{
    speed = 1;
  }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }
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
