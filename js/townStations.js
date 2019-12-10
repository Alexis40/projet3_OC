class TownStations {
    constructor(contract, apiKey){
        this.contract = contract;
        this.apiKey = apiKey;
        this.tabStations = [];
        this.address = document.getElementById("address");;
        this.status = document.getElementById("status");
        this.capacity = document.getElementById("capacity");
        this.freeBikes = document.getElementById("freeBikes");
        this.nameStation = document.getElementById("nameStation");
    }

    createStations(){
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract="+this.contract+"&apiKey="+this.apiKey, function(reponse){
            let stations = JSON.parse(reponse);
            stations.forEach(function(stationJson){
                let station = new Station(stationJson);
                this.tabStations[station.id] = station;
                nantesMap.addMarker(station);
            }.bind(this));
        }.bind(this));
        this.cleaningForm();
    };

    //Ajoute les éléments d'une station sur le formulaire.
    addStationInfos(stationNumber){
        this.status.value = this.tabStations[stationNumber].status;
        this.translateStatusValue();
        this.address.value = this.tabStations[stationNumber].address;
        this.capacity.value = this.tabStations[stationNumber].capacity;
        this.freeBikes.value = this.tabStations[stationNumber].availableBike;
        this.nameStation.value = this.tabStations[stationNumber].nameStation;
    };

    //Traduit la valeur du status.
    translateStatusValue(){
        if(this.status.value === "OPEN"){
            this.status.value = "OUVERTE";
        } else if(this.status.value === "CLOSED"){
            this.status.value = "FERMÉE";
        }
    };

    //Vidage des champs du formulaire.
    cleaningForm(){
        this.status.value = "" ;
        this.address.value = "" ;
        this.capacity.value = "" ;
        this.freeBikes.value = "" ;
        this.nameStation.value = "";
    };
}

