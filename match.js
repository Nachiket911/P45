class Match{

    constructor(){

        this.mrAtom = createSprite(100, 100, 20, 20);
        this.elements = [];
        this.symbols  = [];

        this.CsSymbImage = loadImage("cesium.png");
        this.CsImage = loadImage("cesiumText.jpg");
        this.ZnSymbImage = loadImage("zinc.png");
        this.ZnImage = loadImage("zinc.jpg");
        this.CoSymbImage = loadImage("cobalt.png");
        this.CoImage = loadImage("cobalt.png");
        this.CrSymbImage = loadImage("chromium.png");
        this.CrImage = loadImage("chromium.jpg");
        this.SnSymbImage = loadImage("tin.png");
        this.SnImage = loadImage("tin.jpg");
        this.OSymbImage = loadImage("oxygen.png");
        this.OImage = loadImage("oxygenText.png");
        
    }

    createElements(){

        var elem, yPos = displayHeight/2 - 100, sym;

        for(var i =0; i<=5; i++){

            elem = createSprite(20, yPos, 20, 20);
            this.elements.push(elem);

            yPos += 30;

        }

        imageMode(CENTER);
        image(this.CsImage, elem[0].x, elem[0].y, elem[0].width, elem[0].height);
        image(this.CrImage, elem[1].x, elem[1].y, elem[1].width, elem[1].height);
        image(this.CoImage, elem[2].x, elem[2].y, elem[2].width, elem[2].height);
        image(this.ZnImage, elem[3].x, elem[3].y, elem[3].width, elem[3].height);
        image(this.SnImage, elem[4].x, elem[4].y, elem[4].width, elem[4].height);
        image(this.OImage, elem[5].x, elem[5].y, elem[5].width, elem[5].height);
        
        yPos = displayHeight/2 - 100

        for(var i =0; i<=5; i++){

            sym = createSprite(60, yPos, 20, 20);
            this.symbols.push(sym);

            yPos += 30;

        }

        image(this.CrSymbImage, sym[0].x, sym[0].y, sym[0].width, sym[0].height);
        image(this.OSymbImage, sym[1].x, sym[1].y, sym[1].width, sym[1].height);
        image(this.ZnSymbImage, sym[2].x, sym[2].y, sym[2].width, sym[2].height);
        image(this.SnSymbImage, sym[3].x, sym[3].y, sym[3].width, sym[3].height);
        image(this.CoSymbImage, sym[4].x, sym[4].y, sym[4].width, sym[4].height);
        image(this.CsSymbImage, sym[5].x, sym[5].y, sym[5].width, sym[5].height);

    }

}