var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["alien","platform","298402cd-66f8-4655-8e32-2ebad984c38a","star"],"propsByKey":{"alien":{"name":"alien","sourceUrl":null,"frameSize":{"x":64,"y":80},"frameCount":2,"looping":true,"frameDelay":12,"version":"ne0mT0FKjv1fpxwlZzvhkkhsqZ0Pc8Jn","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":80},"rootRelativePath":"assets/alien.png"},"platform":{"name":"platform","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"OhcD0TWZxVBKAr57BneYYaRwBIdHUtuY","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/platform.png"},"298402cd-66f8-4655-8e32-2ebad984c38a":{"name":"bruh","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":2,"looping":true,"frameDelay":3,"version":"BTEA_p76H8gMuQilv96FpuHzMBDncTeI","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":40},"rootRelativePath":"assets/298402cd-66f8-4655-8e32-2ebad984c38a.png"},"star":{"name":"star","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":5,"looping":true,"frameDelay":1,"version":"UItY1e21C5el98erSdcxzVJNPXVcmGTm","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/star.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Variables
var gameState = "serve";
var score = 0;

// Create Sprites 
var player = createSprite(200,0);
player.setAnimation("alien");
player.visible = false;

var star2 = createSprite(randomNumber(50,350),randomNumber(-30,-60));
star2.setAnimation("star");



var star = createSprite(randomNumber(50,350),randomNumber(-30,-60));
star.setAnimation("star");


var bob2 =createSprite(300,-160);
bob2.setAnimation("platform");


var bob = createSprite(100,0);
bob.setAnimation("platform");
bob.visible = false;

function draw() {
  
  // draw the background
 if(gameState == "serve"){
   background("green");
   fill("red");
   text("USE THE ARROW KEYS TO MOVE. Press Enter To Start",40,200);
   if(keyDown("ENTER")){
     gameState = "play1";
     star.velocityY = 0;
     star2.velocityY = 0;
   }
 } 
 
 if(gameState == "play1"){
   player.visible = true;
   bob.visible = true;
  controlPlayer();
  background1();
  loopPlatforms();
  loopItems();
  playerFall();
  playerLands();
  collectItems();
  bob2.velocityY = 1;
  bob.velocityY = 1;
  star2.velocityY = 3;
  star.velocityY = 3;

    if(score > 9){
   gameState = "play2";
    }
 }
 
 
 if(gameState == "play2"){
    background("black");
    
     player.visible = true;
   bob.visible = true;
   bob2.visible = true;
   star.visible = true;
      star2.visible = true;
  controlPlayer();
  background2();
  loopPlatforms();
  loopItems();
  playerFall();
  playerLands();
  collectItems();
  bob2.velocityY = 1;
  bob.velocityY = 1;
  star2.velocityY = 3;
  star.velocityY = 3;
  
  
    fill("white");
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    ellipse(randomNumber(0,400),randomNumber(0,400),10,10);
    bob.setAnimation("bruh");
    bob2.setAnimation("bruh");
    
    if(score > 19){
      gameState = "end";
     
    }
    
    if(gameState == "end"){
      bob.visible = false;
      player.visible = false;
      bob2.visible = false;
      star.visible = false;
      star2.visible = false;
       score = 0;
      background("black");
      text("GOOD JOB, YOU WIN. PRESS ENTER TO START AGAIN",10,200);
      if(keyDown("ENTER")){
        gameState = "play1";
      }
    }
    
  }
  
  showScore();
  

  
  // update the sprites
  
  drawSprites();
}

// Functions
function background1() {
  
  
  background("darkBlue");
  noStroke();
  
  fill("yellow");
  
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  
  ellipse(340, 50, 60, 60);
  
  fill("darkBlue");
  
  ellipse(320, 30, 60, 60);
}

function background2() {
  background("orange");
  noStroke();
  fill("white");
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
  
  fill("red");
  ellipse(340, 50, 60, 60);
  
}
function showScore() {
  fill("white");
  textSize(20);
  text("Score: ",10, 10, 80, 20);
  text(score,70,10,20,20);
}

function loopPlatforms(){
  if(bob.y>399){
    bob.y = 0;
    bob.x = 100;
    bob.velocityY = 1;
  }
  if(bob2.y>399){
    bob2.y = 0;
    bob2.x = 300;
    bob2.velocityY = 1;
  }
}

function loopItems(){
  if(star.y>400){
    star.x = randomNumber(50,350);
    star.y = randomNumber(-30,-60);
    
  }
  
  if(star2.y>400){
    star2.x = randomNumber(50,350);
    star2.y = randomNumber(-30,-60);
    
  }
}

function playerFall(){
  player.velocityY = player.velocityY + 0.3;
  
  
}

function controlPlayer(){
  
if(keyDown("up")){
player.velocityY = -5;

}

if(keyDown("RIGHT_ARROW")){
  player.velocityX = 3;
  
}else{
  player.velocityX = 0;
}
if(keyDown("left")){
  player.velocityX = -3;
  
}
}

function playerLands(){
  player.collide(bob);
  player.collide(bob2);
  
}

function collectItems(){
  if(player.isTouching(star)){
    star.y = 0;
    star.x = randomNumber(50,350);
    score = score+1;
  }
  if(player.isTouching(star2)){
    star2.y= 0;
    star2.x = randomNumber(50,350);
    score = score + 1;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
