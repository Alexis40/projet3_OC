class Form {
    constructor(){
        this.btnSigning = document.querySelector(".signing");
        this.interaction = document.getElementById("interaction");
        this.reset = document.querySelector(".reset");
        this.timer = document.getElementById("timer");
        this.name = document.getElementById("name");
        this.forename = document.getElementById("forename");
        
        /* ACTION DU BOUTON SIGNATURE */
        this.btnSigning.addEventListener("click", function(e){
           
            this.name.value = localStorage.getItem("name");
            this.forename.value = localStorage.getItem("forename");

            signingCanvas.resetCanvas();
            this.interaction.style.display = "block";
            this.timer.style.display = "none";
            signingCanvas.draw();
            e.preventDefault();
        }.bind(this));
        /* ACTION DU BONTON DE RESET DU CANVAS */
        this.reset.addEventListener("click", function(){
            signingCanvas.resetCanvas();
        }.bind(this));
    }

    /*FONCTION QUI PERMET DE STOCKER DANS LE LOCALSTORAGE LES VALEURS  DES CHAMPS NAME ET FORENAME*/
    stockIdentity(){
        localStorage.setItem("name",this.name.value);
        localStorage.setItem("forename", this.forename.value);
    }

}
