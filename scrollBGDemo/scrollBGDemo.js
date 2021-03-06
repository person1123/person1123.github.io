var images = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  //blendMode(SUBTRACT);
  
  $(document).ready(function() {
    $("body").height(window.innerHeight);
    if (window.location.hash) {
      $("#main-image").attr("src", window.location.hash.substring(1) + ".png");
    }
  });
  if (window.location.hash.substring(1) == "colorwar") {
    images = [loadImage("bg2day4.png"), loadImage("bg3dusk.png"), loadImage("bg4night.png"), loadImage("bg4night.png"), loadImage("bg1dawn.png"), loadImage("bg2day4.png")];
  } else {
    images = [loadImage("bg2day.png"), loadImage("bg3dusk.png"), loadImage("bg4night.png"), loadImage("bg4night.png"), loadImage("bg1dawn.png"), loadImage("bg2day.png")];
  }
}

function draw() {
  background(0);
  var t = $("#holder").scrollTop() / ($("#main-content").height() - $("#holder").height());
  var i = floor(t * (images.length - 1));
  
  tint(255, 255, 255, (cos((t * (images.length - 1) - i) * PI) + 1) / 2 * 255);
  image(images[i], 0, 0, max(width, height / images[i].height * images[i].width), max(height, width / images[i].width * images[i].height));
  
  if (i + 1 < images.length) {
    tint(255, 255, 255, (-cos((t * (images.length - 1) - i) * PI) + 1) / 2 * 255);
    image(images[i + 1], 0, 0, max(width, height / images[i].height * images[i].width), max(height, width / images[i].width * images[i].height));
  }
}