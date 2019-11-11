class townStations {
    constructor(contract, apiKey){
        this.contract = contract;
        this.apiKey = apiKey;
        //this.tableaux = tableaux
    }

    callAppDecaux(){
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract="+this.contract+"&apiKey="+this.apiKey, function(reponse){
            let tableaux = JSON.parse(reponse);
            console.log(tableaux);
            });
    }
}