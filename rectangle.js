function roundFractional(x,y){
  return Math.round(x*Math.pow(10,y))/ Math.pow(10,y);
}

$(function(){

  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click enent*/
  $btnCal.click(function(){
    //get value
    var w = Number($width.val()),
        h = Number($height.val());
    //calculate
    var p=2 * roundFractional(w+h,2);
        a = roundFractional(w*h,2);
  
    //output
    $perimeter.val(p);
    $area.val(a);

  });
});
