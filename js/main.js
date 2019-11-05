let slider = new Slider("slider");
slider.createDivImage();
slider.addImage("../images/sliderImage1.jpg", "Photo d'une carte avec icones");
slider.addImage("../images/sliderImage2.jpg", "image du formulaire à remplir");
slider.addImage("../images/sliderImage3.jpg", "Image du composant signature");
slider.addImage("../images/sliderImage4.jpg", "image de velo en station");
slider.shiftImage();
slider.createButton();
slider.animKeyboard();

