

setInterval(function(){

  var d=new Date();
  var h=d.getHours();
  var m=d.getMinutes();
  var s=d.getSeconds();
  var hr=30*h+m/2;
  var mr=6*m;
   sr=6*s; //even without var works fine


 // document.querySelector(".second").style.transform = `rotate(${sr}deg)`;this also works
   $('.second').css('transform', `rotate(${sr}deg)`);
 $('.minute').css('transform', `rotate(${mr}deg)`);
  $('.hour').css('transform', `rotate(${hr}deg)`);
}, 1000);
