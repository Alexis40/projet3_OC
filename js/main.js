
let slider = new Slider("slider");
slider.addImage("images/image1.jpg", "Photo d'une carte avec icones", "1 - Cliquez sur l'icône d'une station pour choisir l'endroit de votre réservation.");
slider.addImage("images/image2.jpg", "image du formulaire à remplir", "2 - Une fois votre station choisie cliquez sur Signature.");
slider.addImage("images/image3.jpg", "Image du composant signature", "3 - Inscrivez votre nom, prénom et signez.");
slider.addImage("images/image4.jpg", "image d'une reservation", "4 - Vous avez maintenant une réservation durant 20 minutes.");
slider.shiftImage();
slider.animButton();
slider.animKeyboard();


let nantesMap = new Maps("mapId", 47.2173000, -1.5534000, 15);
nantesMap.createMap();


let nantesStations = new TownStations("Nantes", "065d2d6a654436e242564316c9bce3d9604e6394");
nantesStations.createStations();

let signingCanvas = new Canvas();

let nantesForm = new Form();


let timer = new Timer("timer");
timer.loadPage();

