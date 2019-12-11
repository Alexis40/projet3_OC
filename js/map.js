class Maps {
    constructor(htmlId, mapLat, mapLong, zoom){
        this.myMapId = document.getElementById("mapId");
        this.htmlId = htmlId;
        this.mapLat = mapLat;
        this.mapLong = mapLong;
        this.zoom = zoom;
        this.address = "";
        this.nameStation = "";
    }

        //METHODE DE CRÉATION DE LA CARTE AVEC L'API LEAFLET.
    createMap(){
        this.myMap = L.map(this.myMapId).setView([this.mapLat, this.mapLong], this.zoom);
        
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 10,
            maxZoom: 20
        }).addTo(this.myMap);
    }

        //METHODE DE CRÉATION DES MARQUEURS.
    addMarker(station){
        if(station.availableBike === 0){
            this.icon = L.icon({
                iconUrl: "images/iconeVeloRouge.png",
                iconSize: [38, 50]
            })
        }else if(station.availableBike <= 3) {
            this.icon = L.icon({
                iconUrl: "images/iconeVeloOrange.png",
                iconSize: [38, 50]
            })
        }else{
            this.icon = L.icon({
                iconUrl: "images/iconeVeloVert.png",
                iconSize: [38, 50]
            })
        };
        let marker = L.marker([station.lat, station.lng],{icon: this.icon}).addTo(this.myMap);
        this.addPopup(marker, station);
        this.currentStation(marker, station);
    }
    
    //METHODE DE CRÉATION DES POPUP.
    addPopup(marker, station){
        marker.addEventListener("mouseover", function(){
            let latLng = L.latLng(station.lat, station.lng);
            marker.bindPopup("<p>"+ "station : " + station.nameStation + "<br/>" + station.address + "</p>", latLng).openPopup();
        }.bind(this));
    }

    //METHODE DE CRÉATION D'UNE STATION COURANTE AU CLICK SUR UN MARQUEUR.
    currentStation(marker, station){
        marker.addEventListener("click", function(){
            nantesStations.addStationInfos(station.id);
            nantesForm.btnSigning.style.visibility = "visible";
            this.address = station.address;
            this.nameStation = station.nameStation;
            if((station.status === "CLOSED") ||(station.availableBike === 0)){
                nantesForm.btnSigning.style.visibility = "hidden";
                nantesStations.freeBikes.style.color = "red";
                alert("Aucun velo libre à cette station");
            }else{
                nantesForm.btnSigning.style.visibility = "visible";
                nantesStations.freeBikes.style.color = "";
            };
            timer.station = station;
        }.bind(this));
    }
};  

    
