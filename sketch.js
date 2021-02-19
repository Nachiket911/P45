var home, gameState = 0;

function preload(){

    bgImage = loadImage("images/lab.jpg");

}

function setup(){
    
    createCanvas(1000, 750);

    /*backgroundX = createSprite(500, 325, 1000, 750);
    backgroundX.addImage("backgroundX",bgImage );
    backgroundX.scale = 3;*/

    home = new HomeScreen();



    //console.log("1");

    home.display();

}   

function draw(){

    

    if(gameState === 1){

        //console.log("1");
        home.hide();

        match.createElements();

        gameState = 2;
        //match.dragAndDrop();
        drawSprites();

    }

    

    //drawSprites();

}