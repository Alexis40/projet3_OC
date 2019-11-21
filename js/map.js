class Maps {
    constructor(htmlId, mapLat, mapLong, zoom){
        this.myMapId = document.getElementById("mapId");
        this.htmlId = htmlId;
        this.mapLat = mapLat;
        this.mapLong = mapLong;
        this.zoom = zoom;
    }

        //création de la carte avec l'API Leaflet.
    createMap(){
        this.myMap = L.map(this.myMapId).setView([this.mapLat, this.mapLong], this.zoom);
        
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 10,
            maxZoom: 20
        }).addTo(this.myMap);
    };

        //Création des marqueurs.
    addMarker(latitude, longitude){
        this.blueIcon = L.icon({
            iconUrl: "../images/iconVelo2.png",
            iconSize: [38, 50]
        })
        this.marker = L.marker([latitude, longitude],{icon: this.blueIcon}).addTo(this.myMap);
    };
        //création des popups.
    addPopup(address){
        this.marker.addEventListener("mouseover", function(){
            console.log("test");
            this.marker.bindPopup("<p>"+address+"</p>");
        }.bind(this));
    }

        //ajout des infos au formulaire.
    addInfos(stationNumber){
        this.marker.addEventListener("click", function(){
            nantesStations.addStationInfos(stationNumber);
        }.bind(this));
    }
};  

    
