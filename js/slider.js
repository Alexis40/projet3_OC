//CRÉATION DE L'OBJET SLIDER
class Slider {
    constructor(tagId){
        this.tagId = this.tagId;
        this.listImage = [];
        this.slider = document.getElementById(tagId);
        this.indexImage = 0;
        this.animID = null;
    }
//METHODE DE CRÉATION POUR LE IMAGES
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
        image.class = "image";
        document.getElementById("image").appendChild(image);
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
    
    startAnim(){
        this.showImage();
        this.indexImage++;
    }
//CRÉATION D'UNE FONCTION D'ANIMATION DU SLIDER
    sliderAnim(){
        window.addEventListener("load", function(){
            //this.showImage();
            this.animID = setInterval(this.startAnim, 1000)
        }.bind(this));
       
    }
}
