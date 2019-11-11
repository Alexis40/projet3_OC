class Maps {
    constructor(htmlId, mapLat, mapLong, zoom){
        this.htmlId = htmlId;
        this.mapLat = mapLat;
        this.mapLong = mapLong;
        this.zoom = zoom;
        this.map = this.map;
        this.marker = this.marker
    }

    createMap(){
        this.map = L.map(mapId).setView([this.mapLat, this.mapLong], this.zoom);
        
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(latitude, longitude){
       this.marker = L.marker([latitude, longitude]).addTo(this.map);
    }
}