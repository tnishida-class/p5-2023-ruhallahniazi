// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(400,400);
  calendar(2023, 12);
  const d = new Date();
  let year = d.getFullYear();
 //console.log(dayOfWeek(1,1,1))
  console.log(dayOfWeek(d.getFullYear(),d.getMonth(), d.getDate()));
  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  const daysOfWeekJapanese = ['日', '月', '火', '水', '木', '金','土'];
  text(y+"/"+m,20,20);
  let x = 20,Y = 50;
  for (let d = 0;d <daysOfWeekJapanese.length; d++){
    text(daysOfWeekJapanese[d],x + d * 30, Y);
  }
  Y = Y + 30;
  for(let d = 1; d <= daysInMonth(y, m); d++){
    console.log(dayOfWeek(y, m, d));
    text(d,x + calhelper(y,m,d) * 30,Y)
    if(calhelper(y,m,d) == 6){
      Y = Y + 30;
    }}}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(year){
  if(isLeapYear(year)){
    return 366;
  }else{
    return 365;
  }
  // BLANK[1]
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}
function print (text){
  console.log(text);
}
function dayOfWeek(y, m, d){
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const da = new Date(months[m-1] + " "+ d + ", "+y+" 01:15:00");
  return(weekday[da.getDay()]);
}

function calhelper(y, m, d){
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const da = new Date(months[m-1] + " "+ d + ", "+y+" 01:15:00");
  return(da.getDay());
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
