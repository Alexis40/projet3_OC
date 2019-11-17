class Maps {
    constructor(htmlId, mapLat, mapLong, zoom){
        this.htmlId = htmlId;
        this.mapLat = mapLat;
        this.mapLong = mapLong;
        this.zoom = zoom;
        this.map = this.map;
        this.marker = this.marker;
        this.blueIcon = this.blueIcon;
    }

        //création de la carte avec l'API Leaflet.
    createMap(){
        this.map = L.map(mapId).setView([this.mapLat, this.mapLong], this.zoom);
        
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 10,
            maxZoom: 20
        }).addTo(this.map);
    };

        //Création des marqueurs.
    addMarkers(latitude, longitude, stationNumber){
        this.blueIcon = L.icon({
            iconUrl: "../images/iconVelo2.png",
            iconSize: [38, 50],
            iconAnchor: [25, 50],
            //popupAnchor: [0, -50]
        });

        this.marker = L.marker([latitude, longitude],{icon: this.blueIcon}).addTo(this.map);

        this.marker.addEventListener("mouseover", function(){
            nantesStations.addPopup(stationNumber);
        }.bind(this));

        this.marker.addEventListener("click", function(){
            nantesStations.addStationInfos(stationNumber);
        });
    };
};  

    
