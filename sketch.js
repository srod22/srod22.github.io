var brushColor;
var emojiStampSilly = false;
var emojiStampWink = false;
var emojiStampCool = false;
let name = prompt("What is your name?");
let date = prompt("What is today's date?");
const arr = [{"name": name, "date": date}];
console.log(name);
console.log(date);
console.log(arr);
prompt("Choose a color first! Just press ENTER to begin");

function setup() {
  createCanvas(630, 500);
  background(240);
  console.log("Properties of Name: "+arr[0].name)
  console.log("Properties of Date: "+arr[0].date)
}

function draw() {
  //background(220);
  fill(0);
  textSize(20);
  text("Paint Program 1.0", 20,25);
  palletArea();
  brushColoring();
  paintAway();
  fill(0);
  textSize(15);
  text("By: "+arr[0].name,20,40);
  text("Date: "+arr[0].date, 110,40);
  
}

//Pallet Area up Top
function palletArea(){
  //blue box
  fill(0,0,255);
  square(200,8,20);
  
  //green box
  fill(0,255,0);
  square(240,8,20);
  
  //red box
  fill(255,0,0);
  square(280,8,20);
  
  //yellow box
  fill(248, 252, 3);
  square(320,8,20);
  
  //white box
  fill(255);
  square(360,8,20);
  
  //black box
  fill(0);
  square(400,8,20);
  
  //random color
  fill(random(255),random(255),random(255));
  square(440,8,20);
  
  //emojis
  textSize(30);
  text('😜', 470, 32);
  text('😉',510,32);
  text('😎',550,32);
  
  //eraser
  fill(0);
  rect(590,8,20,5);
  fill(255);
  rect(590,13,20,12);
}

function paintAway() {
  noStroke();
  if (mouseY > 60) {
    if (mouseIsPressed) {
      //if we are on the right side of page, let us draw
      fill(brushColor);
      ellipseMode(CENTER);
      ellipse(mouseX, mouseY, 10, 10);
    }
    if(emojiStampSilly){
      mouseClickedTongueEmoji (); 
    }
    if(emojiStampWink){
      mouseClickedWinkEmoji (); 
    }
    if(emojiStampCool){
      mouseClickedCoolEmoji (); 
    }
  }
}

function drawEmoji_1(x,y) {
    if( x && y){
      textSize(50);
      text('😜', pmouseX, pmouseY+30);
    }
}

function mouseClickedTongueEmoji (){
  if (mouseY > 60){   
    if(mouseIsPressed){  
       drawEmoji_1(true,true);   
     }
}
}

function drawEmoji_2(x,y) {
    if( x && y){
      textSize(50);
      text('😉', pmouseX, pmouseY+30);
    }
}

function mouseClickedWinkEmoji (){
  if (mouseY > 60){   
    if(mouseIsPressed){  
       drawEmoji_2(true,true);   
     }
}
}

function drawEmoji_3(x,y) {
    if( x && y){
      textSize(50);
      text('😎', pmouseX, pmouseY+30);
    }
}

function mouseClickedCoolEmoji (){
  if (mouseY > 60){   
    if(mouseIsPressed){  
       drawEmoji_3(true,true);   
     }
}
}

function brushColoring() {
  if ((mouseX > 200) && (mouseX < 220) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
    //change brushColor
      brushColor = color(0,0,255);
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to blue");
    }
  }//end of blue condition
  
    if ((mouseX > 240) && (mouseX < 260) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
    //change brushColor
      brushColor = color(0,255,0);
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to green");
    }
  }//end of green condition
  
      if ((mouseX > 280) && (mouseX < 300) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
    //change brushColor
      brushColor = color(255,0,0);
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to red");
    }
  }//end of red condition
  
  if ((mouseX > 320) && (mouseX < 340) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
    //change brushColor
      brushColor = color(248, 252, 3);
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to yellow");
    }
  }//end of yellow condition
  
  if ((mouseX > 360) && (mouseX < 380) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
    //change brushColor
      brushColor = color(255);
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to white");
    }
  }//end of white condition
  
  if ((mouseX > 400) && (mouseX < 420) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
    //change brushColor
      brushColor = color(0);
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to black");
    }
  }//end of black condition
  
  if ((mouseX > 440) && (mouseX < 460) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
    //change brushColor
      brushColor = color(random(255), random(255), random(255));
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to a random color");
    }
  }//end of random color condition
  
  if ((mouseX > 480) && (mouseX < 500) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
      brushColor = color(240);
      emojiStampSilly = true;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to a silly emoji stamp")
    }
  }//end of Silly Emoji condition
  
    if ((mouseX > 520) && (mouseX < 540) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
      brushColor = color(240);
      emojiStampSilly = false;
      emojiStampWink = true;
      emojiStampCool = false;
      console.log("Color changed to a Wink stamp")
    }
  }//end of Wink Emoji condition
  
      if ((mouseX > 560) && (mouseX < 580) && (mouseY > 8) && (mouseY < 28)) {
    if (mouseIsPressed == true) {
      brushColor = color(240);
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = true;
      console.log("Color changed to a Cool stamp")
    }
  }//end of Cool Emoji condition
  
  if ((mouseX > 590) && (mouseX < 610) && (mouseY > 8) && (mouseY < 25)) {
    if (mouseIsPressed == true) {
      brushColor = color(240);
      fill(240);
      rect(0,60,630,540);
      emojiStampSilly = false;
      emojiStampWink = false;
      emojiStampCool = false;
      console.log("Color changed to a Eraser")
    }
  }//end of Eraser condition
  
} 