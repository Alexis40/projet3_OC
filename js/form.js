class Form {
    constructor(){
        this.form = document.getElementById("form");
    }

    showCanvas(){
        //console.log(this.form);
        this.form.addEventListener("submit", function(e){
            e.preventDefault();
        });
    }

}