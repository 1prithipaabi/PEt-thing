var dog,sadDog,happyDog;
var food, feedIt, addFood;
var milkeImage;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkImage = loadImage("Images/Milk.png")
  
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  

  feedIt = createButton("Feed the dog!!");
  feedIt.position(700,95);
  feedIt.mousePressed(feedDog);
 

  addFood = createButton("Add food :0");
  addFood.position(500,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function addFoods(){
  foodStock = createSprite();
  foodStock.addImage(milkImage);
  foodStock.scale = 0.1;
  foodStock.y = 200;
  foodStock.x = Math.round(random(300,700));
  if(foodStock.x ===600){
    foodStock.visible = false;
  }
  database.ref("/").update({
    Food:foodS

  })
}

function feedDog(){
  dog.addImage(happyDog);
  foodStock.velocityX = 6;
  
}