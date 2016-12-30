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
  tint(255, 255, 255, abs((1 - t * 2)) * 255);
  image(dayImg, 0, 0);
  
  tint(255, 255, 255, (1 - abs((1 - t * 2))) * 255);
  image(nightImg, 0, 0);
}