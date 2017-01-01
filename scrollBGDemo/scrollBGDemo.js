var dayImg, nightImg;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  $(document).ready(function() {
    $("body").height(window.innerHeight);
  });
  dayImg = loadImage("mockup2.png");
  nightImg = loadImage("mockup2-night.png");

  console.log("setup?");
}

function draw() {
  background(0);
  var t = $("#holder").scrollTop() / ($("#main-content").height() - $("#holder").height());
  tint(255, 255, 255, (cos(t * 2 * PI) + 1) / 2 * 255);
  image(dayImg, 0, 0, max(width, height / dayImg.height * dayImg.width), max(height, width / dayImg.width * dayImg.height));
  console.log(t * 2 * PI);
  
  tint(255, 255, 255, (-cos(t * 2 * PI) + 1) / 2 * 255);
  
  image(nightImg, 0, 0, max(width, height / nightImg.height * nightImg.width), max(height, width / nightImg.width * nightImg.height));
}