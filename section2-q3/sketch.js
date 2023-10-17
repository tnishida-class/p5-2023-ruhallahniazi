// ダーツ
const width = 400;
const height = 400;
const cx = width / 2; // 中心は (cx, cy)
const cy = height / 2;

function setup() {
  const green = "green";
  const red = "red";
  const black = "black";
  const cream = color(242, 212, 147);
  createCanvas(width, height);
  background(255);
  stroke(255);
  strokeWeight(3);
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方
  drawCircle(black, maxR);
  drawArcs(green, red,black, cream, maxR * 0.8);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawCircle(red, maxR * 0.05);
}

function drawCircle(c, r){
  fill(c);
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, c3, c4, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c3 : c4);
    stroke(i%2 == 0 ? c1:c2);
    arc(cx, cy, r, r, start, stop, PIE);
    // noFill();
    // strokeWeight(3);
  }
}