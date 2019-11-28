//CRÉATION DE L'OBJET SLIDER
class Slider {
    constructor(tagId){
        this.tagId = this.tagId;
        this.listImage = [];
        this.slider = document.getElementById(tagId);
        this.indexImage = 0;
        this.intervalId = null;
    }

//CRÉATION DES IMAGES
    addImage(pathImage, altImage, instruct){
        this.listImage.push([pathImage, altImage, instruct]);
    }

//REMISE A ZERO DES CONTENEURS
    contZero(){
        document.getElementById("image").innerHTML="";
        document.getElementById("instruction").innerHTML="";
    }
    
//AFFICHAGE DES IMAGES
    showImage(){
        let image = document.createElement("img");
        image.src = this.listImage[this.indexImage][0];
        image.alt = this.listImage[this.indexImage][1];
        image.style.width = "100%";
        image.style.height = "100%";
        document.getElementById("image").appendChild(image);
        let insElts = document.getElementById("instruction");
        let insElt = document.createElement("p");
        insElt.textContent = this.listImage[this.indexImage][2];
        insElt.style.color = "#b22e3b";
        insElts.appendChild(insElt);
    }

//DEFILEMENT DES IMAGES EN AVANT
    nextImage(){
        this.contZero();
        this.indexImage++;
        if (this.indexImage >= this.listImage.length){
            this.indexImage = 0;
        }
        this.showImage();
    }     

//DEFILEMENT DES IMAGES EN ARRIÈRE
    prevImage(){
        this.contZero();
        this.indexImage--;
        if (this.indexImage < 0){
            this.indexImage = this.listImage.length-1;
        }
        this.showImage();
    }        

//CHANGEMENT AUTOMATIQUE DES IMAGES.
   shiftImage(){
    this.contZero();   
    this.showImage();
       this.intervalId = setInterval(function(){
            this.nextImage();
       }.bind(this), 5000);
   }

//CRÉATION DES ANIMATIONS SUR LES BOUTONS.
    animButton(){
        //Bouton suivant
        let buttonNext= document.querySelector(".rightButton");
        buttonNext.addEventListener("click", function(){
            this.nextImage();
        }.bind(this));

        //Bouton précedent
        let buttonPrev= document.querySelector(".leftButton");
        buttonPrev.addEventListener("click", function(){
            this.prevImage();
        }.bind(this));

        //Bouton stop
        let buttonStop = document.querySelector(".stopButton");
        buttonStop.addEventListener("click", function(){
            clearInterval(this.intervalId);
        }.bind(this));

        //Bouton Start
        let buttonStart = document.querySelector(".startButton");
        buttonStart.addEventListener("click", function(){
            this.nextImage();
            this.shiftImage();
        }.bind(this));
    }
//CRÉATION DES EVENT AU CLICK SUR LES TOUCHES CLAVIERS.
    animKeyboard(){
        document.addEventListener("keypress", function(e){
            if(e.keyCode === 43){
                this.nextImage();
            } else if(e.keyCode === 45){
                this.prevImage();
            }
        }.bind(this));
    }
}
