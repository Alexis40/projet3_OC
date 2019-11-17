class Station {
    constructor(stationJson){
        //console.log(stationJson);
        this.id = stationJson.number;
        this.name = stationJson.name;
        this.address = stationJson.address;
        this.lat = stationJson.position.lat;
        this.lng = stationJson.position.lng;
        this.status = stationJson.status;
        this.capacity = stationJson.bike_stands;
        this.availableBike = stationJson.available_bikes;
    }
}