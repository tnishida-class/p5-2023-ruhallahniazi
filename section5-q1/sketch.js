// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(800,800,);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  ellipse(400, 400, w + p * 2 + 10, h + p * 2 + 20);
  triangle(400, 400, 350, 450, 375, 400);
  fill(255);
  text(t,400 - w/2, 400);
}
