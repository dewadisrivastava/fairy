var star,starImage,starImage2
var ground,groundImage
var fairy,fairyImage
var sound
var engine,world
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies  
const Body=Matter.Body
           
var star1

function preload(){
	starImage=loadAnimation("images/star.png")
	groundImage=loadAnimation("images/starNight.png")
	fairyImage=loadAnimation("images/fairyImage1.png")
	starImage2=loadAnimation("images/starImage.png")
	sound=loadSound("sound/JoyMusic.mp3")
}

function setup(){
	createCanvas(500,500)

	engine=Engine.create()
	world=engine.World




	ground=createSprite(250,250)
	ground.addAnimation("ground",groundImage)
	ground.scale=0.6
   


	star=createSprite(450,30,5,5)
	star.addAnimation("star",starImage)
	star.scale=0.1

	

	star1=createSprite(430,30)
	star1.addAnimation("star",starImage2)
	star1.scale=0.03

	
	
	fairy=createSprite(150,300,5,5)
	fairy.addAnimation("fairy",fairyImage)
	fairy.scale=0.16

	
}

function draw(){
	background(0)
  


	if(keyWentDown("RIGHT_ARROW")){
		fairy.velocityX=5
	}

	if(keyDown("LEFT_ARROW")){
		fairy.velocityX=-5
	}

	

	if(fairy.x>=460){
		fairy.velocityX=0
	}

	if(fairy.isTouching(star) && star.y===300){
		star.velocityY=0;
		fairy.velocityX=0
		sound.play()
	}

	if(keyDown("DOWN_ARROW")){
	star.velocityY=20
	}

	drawSprites()
}