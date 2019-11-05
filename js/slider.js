//console.log("test");
//CRÉATION DE L'OBJET SLIDER
class Slider {
    constructor(tagId){
        this.tagId = this.tagId;
        this.listImage = [];
        this.slider = document.getElementById(tagId);
        this.indexImage = 0;
        this.intervalId = null;
    }

//CRÉATION D'UNE DIV QUI CONTIENDRA LES IMAGES.
    createDivImage(){
        let divImage = document.createElement("div");
        divImage.id = "image";
        this.slider.appendChild(divImage);
    }

//CRÉATION DES IMAGES
    addImage(pathImage, altImage){
        this.listImage.push([pathImage, altImage]);
    }

//AFFICHAGE DES IMAGES
    showImage(){
        let image = document.createElement("img");
        image.src = this.listImage[this.indexImage][0];
        image.alt = this.listImage[this.indexImage][1];
        image.style.width = "100%";
        document.getElementById("image").appendChild(image);
    }

//DEFILEMENT DES IMAGES EN AVANT
    nextImage(){
        document.getElementById("image").innerHTML="";
        this.indexImage++;
        if (this.indexImage >= this.listImage.length){
            this.indexImage = 0;
        }
        this.showImage();
    }     

//DEFILEMENT DES IMAGES EN ARRIÈRE
    prevImage(){
        document.getElementById("image").innerHTML="";
        this.indexImage--;
        if (this.indexImage < 0){
            this.indexImage = this.listImage.length-1;
        }
        this.showImage();
    }        

//CHANGEMENT AUTOMATIQUE DES IMAGES.
   shiftImage(){
       this.showImage();
       let that = this;
       this.intervalId = setInterval(function(){
            that.nextImage();
       }, 5000);
       
   }

//CRÉATION DES BOUTONS NEXT, PREV ET STOP AINSI QUE LES EVENTS ASSOCIÉS
    createButton(){
        //Bouton suivant
        let buttonNext = document.createElement("button");
        buttonNext.textContent = "Suivant";
        this.slider.appendChild(buttonNext);
        buttonNext.addEventListener("click", function(){
            this.nextImage();
        }.bind(this));

        //Bouton précedent
        let buttonPrev = document.createElement("button");
        buttonPrev.textContent = "Précédent";
        this.slider.appendChild(buttonPrev);
        buttonPrev.addEventListener("click", function(){
            this.prevImage();
        }.bind(this));

        //Bouton stop
        let buttonStop = document.createElement("button");
        buttonStop.textContent = "stop";
        this.slider.appendChild(buttonStop);
        buttonStop.addEventListener("click", function(){
            clearInterval(this.intervalId);
        }.bind(this));
    }
//CRÉATION DES EVENT AU CLICK SUR LES TOUCHES CLAVIERS.
    animKeyboard(){
        document.addEventListener("keypress", function(e){
            //console.log(e.charCode)
            if(e.keyCode === 43){
                this.nextImage();
            } else if(e.keyCode === 45){
                this.prevImage();
            }
        }.bind(this));
    }
}
