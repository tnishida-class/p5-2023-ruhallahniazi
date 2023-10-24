// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
    if(scores[largest]<scores[i]){
      largest = i;
    }
  }

  smallest = 0;
  for(let i = 0; i < scores.length; i++){
    // BLANK[3]　ヒント：最小値とだいたい同じ
    if(scores[smallest]>scores[i]){
      smallest = i;
    }
  }
  average = sum / 10;
  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){
     line(0, height * i / n, width, height * i / n); 
  }
  
  noStroke();
  let cord = [];
  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    // BLANK[4] ヒント: 条件分岐を使って色を変更します
    if(i == smallest){
      fill("blue");
    }
    else if (i == largest){
      fill("red");
    }else{
      fill("gray");
    }
    rect(i * dx + 2, height - h, dx - 4, h);
    fill("black");
    ellipse(i * dx + 2 + (dx/2), height - h, 10, 10);
    cord[i] = [i * dx + 2 + (dx/2), height - h]
    text(scores[i].toPrecision(3), i * dx, height - h);
  }
  for(let i = 0;i<cord.length;i++){
    if(i!=cord.length-1){
      stroke("black");
      line(cord[i][0], cord[i][1], cord[i+1][0], cord[i+1][1]);
    }
  }
  stroke("blue");
  fill("blue");
  av = (average / 100) * height; 
  line(0, height - av, width,height-av);
  text(average.toPrecision(3), 0, height - av);
  console.log("the average is " + av)
  // BLANK[5] 平均点の線を引きます

}