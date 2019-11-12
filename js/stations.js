class townStations {
    constructor(contract, apiKey){
        this.contract = contract;
        this.apiKey = apiKey;
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
            console.log(station);
        });
    }
}

