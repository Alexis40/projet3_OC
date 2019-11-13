class townStations {
    constructor(contract, apiKey){
        this.contract = contract;
        this.apiKey = apiKey;
        this.stationAddress = document.getElementById("address");;
        this.status = document.getElementById("status");
        this.bikeStands = document.getElementById("capacity");
        this.availableBikes = document.getElementById("freeBikes");
    }

    callAllStations(){
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract="+this.contract+"&apiKey="+this.apiKey, function(reponse){
            let stations = JSON.parse(reponse);
                //console.log(stations);
            //CRÉATION DES MARKER POUR CHAQUE STATION DE L'API JCDECAUX
            stations.forEach(function(station){
                nantesMap.addMarker(station.position.lat, station.position.lng);
            });
        });
    }

    callOneStation(stationNumber){
        ajaxGet('https://api.jcdecaux.com/vls/v1/stations/'+stationNumber+'?contract='+ this.contract +'&apiKey=' + this.apiKey, function(reponse){
            let station = JSON.parse(reponse);
            //console.log(station);
            this.stationAddress.value = station.address;
            this.status.value = station.status
            this.translateStatusValue();
            this.bikeStands.value = station.bike_stands;
            this.availableBikes.value = station.available_bikes;
        }.bind(this));
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

