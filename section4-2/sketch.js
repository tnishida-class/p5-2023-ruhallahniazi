//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let count = 0;
function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function print(x){
  console.log(x);
}
function draw(){
  background(160, 192, 255);
  if(mouseIsPressed != true){
    count = count + 1;
    if(count > 100){
      for(let i = 0;i<2;i++){
        const b = { x: mouseX , y: mouseY, size: random(40, 70), vx: random(-2, 2), vy: random(-2, 2), mass:random(10, 20) };
        balls.push(b);
      }
      count = 0;
    }
  }else{
    count = 0;
  }
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  for(let i = 0;i<balls.length;i++){
    for(let a = i+1; a<balls.length; a++){
      if(i != balls.length-1 ){
        handleCollision(balls[i],balls[a]);
      }
    }
  }
}




function areBallsColliding(ball1, ball2) {
  const dx = ball2.x - ball1.x;
  const dy = ball2.y - ball1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= ball1.size / 2 + ball2.size / 2;
    
}

function ca(ball1,ball2){
    let fx = ball2.x - ball1.x;
    let fy = ball2.x - ball1.y;
    console.log(fx);
    console.log(fy);
    let v1x = fx * 0.004;
    let v1y = fy * 0.001;
    ball1.vx += v1x;
    ball1.vy += v1y;
}
function handleCollision(ball1, ball2) {
  if (areBallsColliding(ball1, ball2)) {
    ca(ball1,ball2);
    ca(ball2,ball1);
  }
}




function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(20, 50), vx: dx, vy: dy,mass:random(10, 20) };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
