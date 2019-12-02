class Maps {
    constructor(htmlId, mapLat, mapLong, zoom){
        this.myMapId = document.getElementById("mapId");
        this.htmlId = htmlId;
        this.mapLat = mapLat;
        this.mapLong = mapLong;
        this.zoom = zoom;
        this.address = "";
    }

        //création de la carte avec l'API Leaflet.
    createMap(){
        this.myMap = L.map(this.myMapId).setView([this.mapLat, this.mapLong], this.zoom);
        
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 10,
            maxZoom: 20
        }).addTo(this.myMap);
    }

        //Création des marqueurs.
    addMarker(station){
        this.icon = L.icon({
            iconUrl: "../images/iconVelo2.png",
            iconSize: [38, 50]
        })
        let marker = L.marker([station.lat, station.lng],{icon: this.icon}).addTo(this.myMap);
        this.addPopup(marker, station);
        this.addInfos(marker, station);
    }
    
    //création des popups.
    addPopup(marker, station){
        marker.addEventListener("mouseover", function(){
            let latLng = L.latLng(station.lat, station.lng);
            marker.bindPopup("<p>" + station.address + "</p>", latLng).openPopup();
        }.bind(this));
    }

    //ajout des infos au formulaire.
    addInfos(marker, station){
        marker.addEventListener("click", function(){
            nantesStations.addStationInfos(station.id);
            nantesForm.btnSigning.style.visibility = "visible";
            this.address = station.address;
            if(station.status === "CLOSED"){
                nantesForm.btnSigning.style.visibility = "hidden";
            }
            timer.station = station;
console.log(timer.station);
        }.bind(this));
    }
};  

    
