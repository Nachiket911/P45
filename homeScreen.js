class HomeScreen{

    constructor(){

        this.button = createButton('Start');
        this.title = createElement('h2','Welcome to Chem_Xpert_To_Be! Dazzle us with your Chemistry knowledge!');
                
    }

    hide(){

        this.title.hide();
        this.button.hide();
                
    }

    display(){

        background(bgImage);
        
        this.title.position(100 , 100);
        this.button.position(500, 325);
        
        this.button.mousePressed(()=> {

            //console.log("4");

            gameState = 1;
            match = new Match();            

        });

    }

}