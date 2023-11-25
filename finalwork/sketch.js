// 最終課題を制作しよう
let game = false; 
let start = true;
let back = true;
let expalin = false;
let shot = true;
let end = false;
let explain = false;
let heigest = false; 
let enemies = [];
let enemies_bullets = [];
let bullet = [];
let cscore = 0;
let xme;
let yme;
let hp = 50;
let highest_score =0;
let me;
let enemie;
function preload() {
  me = loadImage('me.png');
  enemie = loadImage("enemie.png");
}
let ecount = 0;
let createe = true;
function creat_enemie(){
  if(createe){
    const b = { x: random(0, windowWidth-100) , y: -50,HP:10};
    enemies.push(b);
    createe = false;
    }else{
      console.log(ecount);
      ecount+= 1;
      if(ecount == 200){
        createe = true;
        ecount = 0;
      }}
}

let createb = true;
let countb = 0;
function creat_enemie_bullet(){
  if(createb){
    let rando = Math.floor(Math.random() * enemies.length);
    const e = enemies[rando];
    if(typeof e !== 'undefined'){
      const b = { x: e.x + 50 , y: e.y +100, speed: -5};
      enemies_bullets.push(b);
      createb = false;
    }
    }else{
      console.log(countb);
      countb+= 1;
      if(countb == 50){
        createb = true;
        countb = 0;
      }
    }
}
function draw_enemies_bullet(){
  for(let i = 0; i < enemies_bullets.length; i++){
    let b = enemies_bullets[i];
    if(typeof b !== 'undefined'){
      fill("#3498db")
      ellipse(b.x, b.y, 10);
      b.y -= b.speed;
    }
  }
}
function collid_2(){
  for(let a = 0;a<enemies_bullets.length;a++){
    if(typeof enemies_bullets[a] ==='undefined'){
      continue;
    }
    if(Colliding(enemies_bullets[a],{x:xme,y:yme})){
      delete enemies_bullets[a];
      hp -=1;
    }
  }
  deleteel(enemies_bullets);
}
function collid(){
  for(let a = 0;a<bullet.length;a++){
    if(typeof bullet[a] !== 'undefined'){
      for(let b = 0;b<enemies.length;b++){
        if(typeof bullet[a] === 'undefined'){
          break;
        }
        if(typeof enemies[b] !== 'undefined'){
          if(Colliding(bullet[a],enemies[b])){
            delete bullet[a];
            enemies[b].HP -=1;
            if(enemies[b].HP<=0){
              cscore += 1;
              delete enemies[b];
            }
          }
        }
      }
    }
  }
  deleteel(bullet);
  deleteel(enemies);
}
function draw_bullet(){
  for(let i = 0; i < bullet.length; i++){
    let b = bullet[i];
    if(typeof b !== 'undefined'){
      fill("#3498db")
      ellipse(b.x, b.y, 10);
      b.y -= b.speed;
    }
  }
}
function Colliding(bull, airp) {
  console.log("the bull is "+bull)
  console.log("the airp is "+airp)
  const dx = bull.x - airp.x - 50;
  const dy = bull.y - airp.y - 50;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < 55;
    
}
function drawenemie(){
  for(let i = 0; i < enemies.length; i++){
    let b = enemies[i];
    if(typeof b !== 'undefined'){
      image(enemie, b.x,b.y, 100, 100);
      b.y += 1;
    }
  }
}
function show_back(){
  button = createButton('Back');
  button.addClass('easy-button');
  button.id("back")
  button.position(windowWidth - 110, 10);
  button.mousePressed(function(){
    back_fu(button);
  });
}
function back_fu(button){
  button.hide();
  button.remove();
  if(cscore>highest_score){
    highest_score = cscore;
  }
  game = false; 
  start = true;
  back = true;
  expalin = false;
  shot = true;
  end = false;
  heigest = false;
  explain = false;
  hp = 50;
  enemies = [];
  enemies_bullets = [];
  bullet = [];
  cscore = 0;
  ecount = 0;
  createe = true;
}
function show_button(){
  button = createButton('Start the Game');
  button1 = createButton('Highest score');
  button2 = createButton('Explanation');
  button.addClass('easy-button');
  button1.addClass('easy-button');
  button2.addClass('easy-button');
  button.position(windowWidth/2 -(150), (windowHeight/2) - 200);
  button1.position(windowWidth/2 -(150), (windowHeight/2) - 100);
  button2.position(windowWidth/2 -(150), (windowHeight/2));
  button.mousePressed(function(){
    Start(button,button1,button2);
  });
  button1.mousePressed(function(){
    show(button,button1,button2);
  });
  button2.mousePressed(function(){
    Explain(button,button1,button2);
  });
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  xme = windowWidth/2 - 50;
  yme = (windowHeight -100) * 0.90;
}
function deleteel(list){
  let nlist = [];
  for(let a = 0;a<list.length;a++){
    let obj = list[a];
    if(typeof obj !== 'undefined'){
      nlist.push(obj);
    }
  }
  return nlist;
}
function Delete_bullet(list){
  for(let a = 0;a<list.length;a++){
    let obj = list[a];
    if(typeof obj !== 'undefined' && obj.y<0){
      delete list[a];
    }
  }
  for(let a = 0;a<enemies_bullets.length;a++){
    let obj = enemies_bullets[a];
    if(typeof obj !== 'undefined' && obj.y>windowHeight){
      delete enemies_bullets[a];
    }
  }
  enemies_bullets = deleteel(enemies_bullets);
  bullet = deleteel(list);
}
function Delete_plane(){
  for(let a = 0;a<enemies.length;a++){
    let obj = enemies[a];
    if(typeof obj !== 'undefined' && obj.y>=windowHeight -50){
      delete enemies[a];
    }
  }
  enemies = deleteel(enemies);
}
let count = 0;
function shot_bu(){
  if(keyIsDown(" ".charCodeAt(0))){
    if(shot){
    const b = { x: xme+50 , y: yme, speed: 5};
    bullet.push(b);
    shot = false;
    }else{
      console.log(count);
      count+= 1;
      if(count == 5){
        shot = true;
        count = 0;
      }
    }
}else{
  count = 0;
}
}
function draw(){
  background(0);
  if(start){
    show_button();
    start = false;
  }else{
    if(game){
      if(back){
        show_back();
        back = false;
      }
      if(end == false){
      textSize(32);
      fill("red");
      text('HP: '+ hp, 50, 50);
      text('Score: '+cscore ,50, 80);
      image(me, xme,yme, 100, 100);
      if(keyIsDown(LEFT_ARROW)){ xme -= 5}
      if(keyIsDown(RIGHT_ARROW)){ xme += 5}
      shot_bu();
      draw_bullet();
      creat_enemie();
      drawenemie();
      collid();
      Delete_bullet(bullet);
      collid_2();
      creat_enemie_bullet();
      draw_enemies_bullet();
      Delete_plane();
      endgame();
      xme = constrain(xme, 0, windowWidth-100);
      }else{
        textSize(32);
        fill("red");
        text('Game Over',windowWidth/2 - 75, windowHeight/2 - 75);
        text('Score: '+ cscore ,windowWidth/2 - 50, windowHeight/2 - 40);
      }
    }
    else if(heigest){
      if(back){
        show_back();
        back = false;
      }
      fill("red");
      textSize(32);
      text('Highest score is: ' + highest_score,windowWidth/2 - 100, windowHeight/2 - 75);
    }
    else if(explain){
      if(back){
        show_back();
        back = false;
      }
      fill("red");
      textSize(32);
      textWrap(WORD);
      text('"Sky Ace Showdown" is a dynamic plane game where players pilot a fighter jet, dodging enemies with left and right arrow keys while shooting bullets with the space key. Accumulate points by skillfully navigating the aerial battlefield. Manage your plane\'s health points (HP) carefully, as collisions lead to defeat. With fast-paced action and strategic gameplay, test your piloting skills to become the ultimate Sky Ace.', windowWidth/2 - 250, windowHeight/2 - 250, 600);
    }
  }
}

function endgame (){
  if(hp<=0){
    end = true;
    if(cscore> highest_score){
      highest_score = cscore;
    }
  }
}

function Start(button,button1,button2){
  game = true;
  button.hide();
  button1.hide();
  button2.hide();
  button.remove();
  button1.remove();
  button2.remove();
}
function show(){
  heigest = true;
  button.hide();
  button1.hide();
  button2.hide();
  button.remove();
  button1.remove();
  button2.remove();
}
function Explain(button,button1,button2){
  explain = true;
  button.hide();
  button1.hide();
  button2.hide();
  button.remove();
  button1.remove();
  button2.remove();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
