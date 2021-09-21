var bgImg;
var tom,tomImg1,tomImg2;
var jerry,jerryImg1,jerryImg2;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    tomImg1 = loadImage("cat1.png");
    tomImg2 = loadImage("cat2.png,cat3.png");
    jerryImg1 = loadImage("mouse1.png")
    jerryImg2 = loadImage("mouse2.png,mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("catSitting",catImg1);
    cat.scale = 0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
   

  //For moving and changing animation write code here


}
