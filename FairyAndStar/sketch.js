var fairysprite, fairyimage
var stars
var starsprite, starimage







function preload()  {
fairyimage = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
stars = loadImage("images/starNight.png")
starimage = loadAnimation("images/star.png")
}

function setup()   {
    createCanvas(2000,800);
	fairysprite = createSprite(500,400)
	starsprite = createSprite(1220,100)
//giving animation to fairy
fairysprite.addAnimation("fairy",fairyimage)
starsprite.addAnimation("star", starimage)
starsprite.scale = 0.20
fairysprite.scale = 0.15


}






function draw() {
	background(stars);

if(keyDown("RIGHT_ARROW")) {
	fairysprite.velocityX = 3
}
if(fairysprite.x > 1150) {
	fairysprite.velocityX = 0
	starsprite.velocityY = 5
}
if(starsprite.y > 390)
	starsprite.velocityY = 0
    drawSprites();
}
