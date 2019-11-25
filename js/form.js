class Form {
    constructor(){
        this.signing = document.querySelector(".signing");
        this.canvas = document.getElementById("canvas");
        this.validation = document.querySelector(".validation");
        this.form = document.querySelector("form");
        this.resetSigning = document.querySelector(".reset");
    }

    showCanvas(){
        this.signing.addEventListener("click", function(e){
            this.canvas.style.display = "block";
            this.validation.style.display = "block";
            this.resetSigning.style.display = "block";
            this.signing.style.display = "none";
            e.preventDefault();
        }.bind(this));
    };

    validReservation(){
        this.form.addEventListener("submit", function(e){
            this.canvas.style.display = "none";
            this.validation.style.display = "none";
            this.resetSigning.style.display = "none";
            this.signing.style.display = "block";
            e.preventDefault();
        }.bind(this));
    };
}