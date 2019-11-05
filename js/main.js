let slider = new Slider("slider");
slider.createDivImage();
slider.addImage("../images/image_slider_1.jpg", "image de velo en station");
slider.addImage("../images/image_slider_2.jpg", "deuxième image");
slider.addImage("../images/image_slider_3.jpg", "troisième image");
slider.addImage("../images/image_slider_4.jpg", "quatrième image");
slider.shiftImage();
slider.createButton();
slider.animKeyboard();

