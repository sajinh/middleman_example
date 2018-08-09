
if ( localStorage.getItem('jb_night_mode') ) {
  $('#toggle-box-checkbox').prop("checked",true);
  $('body').addClass('night');
}

$('#toggle-box-checkbox').on('change', function(){
  if (this.checked) {
    $('body').addClass('night');
    localStorage.setItem('jb_night_mode','yes');
  } else {
    localStorage.removeItem('jb_night_mode');
    $('body').removeClass('night');
  } 
});
