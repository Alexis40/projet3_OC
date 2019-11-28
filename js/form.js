class Form {
    constructor(){
        this.btnSigning = document.querySelector(".signing");
        this.interaction = document.getElementById("interaction");
        this.reset = document.querySelector(".reset");
        this.timer = document.getElementById("timer");
        this.name = document.getElementById("name");
        this.forename = document.getElementById("forename");
        

        this.btnSigning.addEventListener("click", function(e){
            signingCanvas.resetCanvas();
            this.interaction.style.display = "block";
            this.timer.style.display = "none";
            signingCanvas.draw();
            e.preventDefault();
        }.bind(this));

        this.reset.addEventListener("click", function(){
            signingCanvas.resetCanvas();
        }.bind(this));
    }

}
