// 小手調べ
function setup(){
  createCanvas(100,100);
  background(196);
  let r;
  for(let r =5; r < 10; r + 5){
    ellipse(50,50,r)
    if( r<100){
      stroke(255,0,0);
    }
    if( r<51)
      stroke(0,0,255)
    }
    // BLANK[1]
  }
