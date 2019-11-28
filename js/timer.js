class Timer {
    constructor(id){
        this.id = id;
        this.eltTimer = document.getElementById(id);
        this.reserve = document.querySelector(".validation");
        this.eltChrono = this.eltTimer.querySelector(".timerChrono");
        this.eltStop = this.eltTimer.querySelector(".timerStop");
        this.eltText = this.eltTimer.querySelector(".timerText");

        this.time = 0;
        this.endTime = 0;
        this.timerText = "";


        //Au click sur le bouton reservé on declenche le copmte à rebours. C'est ici qu'on choisira le temps du compte à rebours.
        this.reserve.addEventListener("click", function(e){
            if((nantesForm.name.validity.valueMissing) || (nantesForm.forename.validity.valueMissing) || (signingCanvas.clickX.length === 0)){
                alert("Veuillez entrer votre nom, prénom et signature pour valider votre réservation.");
                e.preventDefault(e);
            }else{
                this.startTimer(Date.now() + 1000 * 1200, "Vous avez une reservation en cours");
                this.eltChrono.style.display = "block";
                this.eltStop.style.display = "block";
                this.eltTimer.style.display = "block";
                nantesForm.interaction.style.display = "none";
            };
        }.bind(this));

        //Au click sur le bouton stop on arrete le compte à rebours.
        this.eltStop.addEventListener("click", function(){
           this.stopTimer();
            this.eltChrono.style.display = "none";
            this.eltStop.style.display = "none";
        }.bind(this));

        /*STOCKAGE DES DONNÉES POUR MIS A JOUR DU NAVIGATEUR.*/
        this.endTime = sessionStorage.getItem(this.id+"endTime");
        this.timerText = sessionStorage.getItem(this.id+"timerText");
        if(this.endTime){
            this.eltText.style.display = "block";
            this.eltChrono.style.display = "block";
            this.eltStop.style.display = "block";
            this.startTimer(this.endTime, this.timerText);
        };
    }

    /* METHODE POUR STOPPER LE COMPTE A REBOURS */
    stopTimer(){
        clearInterval(this.interval);
        this.eltChrono.textContent = "Votre réservation est arrivée à son terme.";
        this.eltText.textContent = "Vous avez annulé votre reservtaion.";
        sessionStorage.removeItem(this.id+"endTime");
        sessionStorage.removeItem(this.id+"timerText");
    }

     /*METHODE DE MISE EN ROUTE DU TIMER*/
     startTimer(date, text){
        this.endTime = date;
        this.timerText = text;
        this.stopTimer();
        this.updateTimer();
        this.eltText.textContent = this.timerText;
        sessionStorage.setItem(this.id+"endTime", this.endTime);
        sessionStorage.setItem(this.id+"timerText", this.timertext);
        this.interval = setInterval(e => this.showTime(), 1000);
    }

     /* METHODE QUI METTRA A JOUR LE TIMER*/
     updateTimer(){
        this.time = Math.round((this.endTime - Date.now()) / 1000);
        let min = Math.floor(this.time/60);
        let sec = this.time - min*60;
        if(min<10){
            min = "0" + min;
        }
        if(sec<10){
            sec = "0" + sec;
        }
        this.eltChrono.textContent = min + ":" + sec;
    }

    /*CRÉATION DE LA FONCTION DU COMPTE A REBOURS*/
    showTime(){
        this.updateTimer();
        if(this.time<=0){
            this.stopTimer();
        }
    }
}

