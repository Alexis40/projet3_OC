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
        this.station = null;


        //ACTION AU CLICK SUR LE BOUTON RÉSERVÉ, CHOIX DU TEMPS DU TIMER
        this.reserve.addEventListener("click", function(e){
            if((nantesForm.name.validity.valueMissing) || (nantesForm.forename.validity.valueMissing) || (signingCanvas.clickX.length === 0)){
                alert("Veuillez entrer votre nom, prénom et signature pour valider votre réservation.");
                e.preventDefault(e);
            }else{
                nantesForm.stockIdentity();
                this.station.availableBike--;
                nantesStations.freeBikes.value = this.station.availableBike;
                this.startTimer(Date.now() + 1000 * 10, "Vous avez une reservation à la station : "+ nantesMap.nameStation +  "</br>" + nantesMap.address);
                this.eltChrono.style.display = "block";
                this.eltStop.style.display = "block";
                this.eltTimer.style.display = "block";
                nantesForm.interaction.style.display = "none";
                nantesForm.btnSigning.style.visibility = "hidden";
            };
        }.bind(this));

        //ACTIO AU CLICK SUR LE BOUTON STOP
        this.eltStop.addEventListener("click", function(){
            this.stopTimer();
            //console.log(this.station);
            //this.station.availableBike++;
            //nantesStations.freeBikes.value = this.station.availableBike;
            this.eltText.innerHTML = "Vous avez annulé votre réservation. <br>Cliquez sur une station pour effectuer une autre réservation."
            this.eltChrono.style.display = "none";
            this.eltStop.style.display = "none";
            nantesForm.btnSigning.style.visibility = "visible";
            this.time = 0;
        }.bind(this));

        /*STOCKAGE DES DONNÉES POUR MIS A JOUR DU NAVIGATEUR APRÈS RECHARGEMENT.*/
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
        this.eltText.innerHTML = "Votre réservation est arrivée à son terme.";
        this.eltChrono.style.display = "none";
        this.eltStop.style.display = "none";
        sessionStorage.removeItem(this.id+"endTime");
        sessionStorage.removeItem(this.id+"timerText");
        this.station = null;
        nantesForm.btnSigning.style.visibility = "visible";
    }

     /*METHODE DE MISE EN ROUTE DU TIMER*/
     startTimer(date, text){
        this.endTime = date;
        this.timerText = text;
        this.stopTimer();
        this.updateTimer();
        this.eltText.innerHTML = this.timerText;
        sessionStorage.setItem(this.id+"endTime", this.endTime);
        sessionStorage.setItem(this.id+"timerText", this.timerText);
        this.interval = setInterval(e => this.showTime(), 1000);
    }

     /* METHODE DE MISE EN FORME DU TIMER*/
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

     //INITIALISATION DES DIVS CHRONO ET STOP AU CHARGEMENT
     loadPage(){
        window.addEventListener("load", function(){
           if(this.time > 0){
                this.eltChrono.style.display = "block";
                this.eltStop.style.display = "block";
           } else {
                this.eltChrono.style.display = "none";
                this.eltStop.style.display = "none";
           }
        }.bind(this));
    }
}

