function generateBlob() {
  var percentage1 = _.random(25, 75);
  var percentage2 = _.random(25, 75);
  var percentage3 = _.random(25, 75);
  var percentage4 = _.random(25, 75);
  var percentage5 = _.random(25, 70);
  var percentage6 = _.random(25, 70);

  var percentage11 = 100 - percentage1;
  var percentage21 = 100 - percentage2;
  var percentage31 = 100 - percentage3;
  var percentage41 = 100 - percentage4;
  var percentage51 = 100 - percentage5;
  var percentage61 = 100 - percentage6;


  var borderRadius = ` ${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}%  / ${percentage5}% ${percentage61}% ${percentage6}% ${percentage51}%`;

  $(".blob").css("border-radius", borderRadius);
  $(".style span").html(borderRadius);

}
function promeniSliku(){
  var mojeSlike = new Array("image/cbdevojka.jpg", "image/dominikana.jpg","image/miami.jpg", "image/obala.jpg", "image/sesirdevojka.jpg", "image/zenaumoru.jpg");
  var randomSlika = mojeSlike[Math.floor(Math.random() * mojeSlike.length)];
  
  $(".blob").css("background-image", 'url(' + randomSlika + ')');
   
}


$(document).ready(function() {
  generateBlob();
  promeniSliku();
  
});

