let slider = new Slider("slider");
slider.addImage("../images/image1.jpg", "Photo d'une carte avec icones", "Choisissez votre station");
slider.addImage("../images/sliderImage2.jpg", "image du formulaire à remplir", "Remplissez le formulaire de reservation");
slider.addImage("../images/sliderImage3.jpg", "Image du composant signature", "Signez pour valider");
slider.addImage("../images/sliderImage4.jpg", "image de velo en station", "Profitez !!");
slider.shiftImage();
slider.animButton();
slider.animKeyboard();


let nantesMap = new Maps("mapId", 47.2173000, -1.5534000, 15);
nantesMap.createMap();

let nantesStations = new TownStations("Nantes", "065d2d6a654436e242564316c9bce3d9604e6394");
nantesStations.createStations();

let signingCanvas = new Canvas();


let nantesForm = new Form();
//nantesForm.stockeIdentity();


let timer = new Timer("timer");


