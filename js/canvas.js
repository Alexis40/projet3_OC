class Canvas {
    constructor(){
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.clickX = [];
        this.clickY = [];
        this.clickDrag = [];
        this.paint = false;
    }
    //FONCTION POUR JOUER L'ECRITURE SUR LE CANVAS
    draw(){
       //AU CLICK SOURIS ON COMMENCE LE DESSIN.
        this.canvas.addEventListener("mousedown", function(e){
            this.mouseX = e.pageX - this.canvas.offsetLeft;
            this.mouseY = e.pageY - this.canvas.offsetTop;
            this.paint = true;
            
            this.addclick(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop, false);

            this.redraw();

        }.bind(this));

        //QUAND LA SOURIS BOUGE ON DESSINE.
        this.canvas.addEventListener("mousemove", function(e){
            if(this.paint){
                this.addclick(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop, true);
                this.redraw();
            }
        }.bind(this));

        //QUAND ON RELACHE LA SOURIS ON STOP LE DESSIN.
        this.canvas.addEventListener("mouseup", function(e){
            this.paint = false;
        }.bind(this));

        //QUAND LA SOURIS SORT DU CANVAS ON STOP LE DESSIN.
        this.canvas.addEventListener("mouseleave", function(e){
            this.paint = false;
        }.bind(this));
    }

    //FONCTION QUI PERMET DE STOCKER LES POSITION DANS LEURS TABLEAUX RESPECTIFS.
    addclick(x, y, dragging){
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
    }

    //FONCTION QUI AFFICHE LE DESSIN.
    redraw(){
        this.context.clearRect(0, 0,  this.context.canvas.width,  this.context.canvas.height);

        this.context.strokeStyle = "#000";
        this.context.lineJoin = "round";
        this.context.lineWidth = 2;

        for(let i=0; i <  this.clickX.length; i++){
            this.context.beginPath();
            if(this.clickDrag[i] && i){
                this.context.moveTo(this.clickX[i-1], this.clickY[i-1]);
            }else{
                this.context.moveTo(this.clickX[i]-1, this.clickY[i]);
            }
            this.context.lineTo(this.clickX[i], this.clickY[i]);
            this.context.closePath();
            this.context.stroke();
        }
    }

    resetCanvas(){
        this.context.clearRect(0, 0,  this.context.canvas.width,  this.context.canvas.height);
        this.clickX = [];
        this.clickY = [];
        this.clickDrag = [];
    }
}


