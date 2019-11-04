//CRÉATION DE L'OBJET SLIDER
class Slider {
    constructor(tagId){
        this.tagId = this.tagId;
        this.listImage = [];
        this.slider = document.getElementById(tagId);
        this.indexImage = 0;
        
    }

//METHODE DE DEFILEMENT DES IMAGES.
   changementImage(){
       let that = this;
       intervalId = setInterval(function(){
        document.getElementById("image").innerHTML="";
        that.indexImage++;
        if (that.indexImage >= that.listImage.length){
            that.indexImage = 0;
        }
        that.showImage();
       }, 5000);
   }

//METHODE DE CRÉATION POUR LES IMAGES
    addImage(pathImage, altImage){
        this.listImage.push([pathImage, altImage]);
    }

//CRÉATION D'UNE DIV QUI CONTIENDRA LES IMAGES.
    createDivImage(){
        let divImage = document.createElement("div");
        divImage.id = "image";
        this.slider.appendChild(divImage);
    }

//PERMET L'AFFICHAGE DES IMAGES
    showImage(){
        let image = document.createElement("img");
        image.src = this.listImage[this.indexImage][0];
        image.alt = this.listImage[this.indexImage][1];
        image.style.width = "100%";
        document.getElementById("image").appendChild(image);
        //setInterval(this.nextImage, 3000);
    }
//CRÉATION DES BOUTONS NEXT ET PREV AINSI QUE LES EVENTS ASSOCIÉS
    createButton(){
        //Bouton suivant
        let buttonNext = document.createElement("button");
        buttonNext.textContent = "Suivant";
        this.slider.appendChild(buttonNext);
        buttonNext.addEventListener("click", function(){
            document.getElementById("image").innerHTML="";
            this.indexImage++;
            if (this.indexImage >= this.listImage.length){
                this.indexImage = 0;
            }
            this.showImage();
        }.bind(this));

        //Boutton précedent
        let buttonPrev = document.createElement("button");
        buttonPrev.textContent = "Précédent";
        this.slider.appendChild(buttonPrev);
        buttonPrev.addEventListener("click", function(){
           document.getElementById("image").innerHTML="";
            this.indexImage--;
            if (this.indexImage < 0){
               this.indexImage = this.listImage.length-1;
           }
            this.showImage();
        }.bind(this));
    } 
}
