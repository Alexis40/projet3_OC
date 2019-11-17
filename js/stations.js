class townStations {
    constructor(contract, apiKey){
        this.contract = contract;
        this.apiKey = apiKey;
        this.stationAddress = document.getElementById("address");;
        this.status = document.getElementById("status");
        this.bikeStands = document.getElementById("capacity");
        this.availableBikes = document.getElementById("freeBikes");
        this.marker = document.querySelector(".leaflet-marker-icon");
        this.allStations = [];
    }

    callAllStations(){
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract="+this.contract+"&apiKey="+this.apiKey, function(reponse){
            let stations = JSON.parse(reponse);
            //POUR CHAQUE STATION ON VA CRÉER UN OBJET STATION EN PASSANT PAR LE CONSTRUCTOR DE STATION.JS
            stations.forEach(function(stationJson){
                //console.log(station.number);
                let station = new Station(stationJson);

                this.allStations[station.id] = station;//Ligne faite avec David
                nantesMap.addMarker(stationJson.position.lat, stationJson.position.lng, stationJson.number);
            }.bind(this));
        }.bind(this));
    }

    callOneStation(stationNumber){
        console.log(this.allStations[stationNumber]);//AU CLICK ON AFFICHE L'OBJET 
        ajaxGet('https://api.jcdecaux.com/vls/v1/stations/'+stationNumber+'?contract='+ this.contract +'&apiKey=' + this.apiKey, function(reponse){
            let station = JSON.parse(reponse);
            //console.log(station);
            this.addMarkerInfo(station);
        }.bind(this))
    }

    //PERMET L'AJOUT DES INFOS DES STATIONS SUR LA PAGE
    addMarkerInfo(station){
        this.stationAddress.value = station.address;
        this.status.value = station.status
        this.translateStatusValue();
        this.bikeStands.value = station.bike_stands;
        this.availableBikes.value = station.available_bikes;
    }

    //TRADUCTION DU STATUS DE LA STATION
    translateStatusValue(){
        if(this.status.value === "OPEN"){
            this.status.value = "OUVERTE";
        } else if(this.status.value === "CLOSED"){
            this.status.value = "FERMÉE";
        }
    }

}

