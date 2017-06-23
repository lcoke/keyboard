$(document).ready(function(){
  $('keyboard-upper-container').hide();

  $(document).on('keydown', function(key) {
    handleHighlight(key.which);
  });

  $(document).on('keyup', function(key) {
    handleHighlight(key.which, true);
  });

  // $(document).on('keydown', function(event){
  //   var keyboard = 16;
  //   if (event.which === keycode) {
  //     $('#keyboard-lower-container').hide();
  //     $('#keyboard-upper-container').show();
  //   }
  // })
  
  // $(document).on('keyup', function() {
  //   $('#keyboard-upper-container').hide();
  //   $('#keyboard-lower-container').show();
  // });

  // $(document).keypress(function(event){
  //   var id = $('#id');
  //   if (event.which == id) {

  //   }
  // });
});

function handleHighlight(code, kill) {
  if (!kill) {
    $('#'+ code).css('background-color', 'pink');
  } else if (kill) {
    $('#'+ code).css('background-color', '#f5f5f5');
  }
}

var sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot', 
    'oat itain oat tainnate eate tea anne inant nean', 
    'itant eate anot eat nato inate eatanot tain eat', 
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
counter=0
var s1 = sentences[0].split('')
    console.log(s1)
    console.log(s1[0])





