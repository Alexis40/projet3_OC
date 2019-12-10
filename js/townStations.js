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

    //AJOUT DES ÉLEMENT D'UNE STATION AUX CHAMP DU FORMULAIRE
    addStationInfos(stationNumber){
        this.status.value = this.tabStations[stationNumber].status;
        this.translateStatusValue();
        this.address.value = this.tabStations[stationNumber].address;
        this.capacity.value = this.tabStations[stationNumber].capacity;
        this.freeBikes.value = this.tabStations[stationNumber].availableBike;
        this.nameStation.value = this.tabStations[stationNumber].nameStation;
    };

    //TRADUCTION DE LA VALEUR DU STATUS
    translateStatusValue(){
        if(this.status.value === "OPEN"){
            this.status.value = "OUVERTE";
        } else if(this.status.value === "CLOSED"){
            this.status.value = "FERMÉE";
        }
    };

    //VIDAGE DES CHAMPS DU FORMULAIRE.
    cleaningForm(){
        this.status.value = "" ;
        this.address.value = "" ;
        this.capacity.value = "" ;
        this.freeBikes.value = "" ;
        this.nameStation.value = "";
    };
}

