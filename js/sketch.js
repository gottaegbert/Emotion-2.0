// created by yasai
// 2018/06/27

var noise;
var angle = 0;
var targetSize = 15;
var targetSpacing = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noiseDetail(2, 0.9);
}

function draw() {
  background(options.Background);

   huan(0);
   targetSize = 15;
   targetSpacing = 2;


}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function huan(s){
  for (var y = 1; y < height*2; y += 2*(options.Spacing+options.Size)) {
    for (var x = 1; x < options.Nums+1; x++) {
      push();
      var n = noise(x *options.noiseScale, y *options.noiseScale, frameCount * 0.05);

      if(options.ColorMode == 'Single'){
       var rgb = hexToRgb(options.Color);
       stroke(rgb.r,rgb.g,rgb.b);
     }else{
      var rgb = hexToRgb(options.Color);
      var r = rgb.r + n *27;
      var g = rgb.g + n *95;
      var b = rgb.b + n *31;//可以定义情绪分布颜色
      stroke(r,g,b);
    }
    noFill();
    strokeCap(SQUARE);

    translate(width/2, height/2);
    var w = map(n,0,1,s,options.Size);//定义波动！
    strokeWeight(w);

    var angle = TWO_PI/options.Nums;
    var space = TWO_PI/(1/options.Spacing)/10000;
    if(options.Nums != 1){
      arc(0,0,200+y,200+y,x*angle,(x+1)*angle-space);
    }else {
      ellipse(0,0,y,y);
    }
    pop();
  } 
}
}
