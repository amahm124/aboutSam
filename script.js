$(document).ready(function(){
  $('#button1').click(function(){
     $('#Gym').show();
   $('#Rollerskate').hide();
   $('#Music').hide();
  });
});
$(document).ready(function(){
  $('#button2').click(function(){
     $('#Rollerskate').show();
   $('#Gym').hide();
   $('#Music').hide();
  });
});
$(document).ready(function(){
  $('#button3').click(function(){
     $('#Music').show();
   $('#Gym').hide();
   $('#Rollerskate').hide();
  });
});