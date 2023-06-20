var a = 0;

function myFunction() {
	if(a == 0){
    $('#dropdown-test').val('default');
  	$('#dropdown-test').removeAttr("multiple");
    $('#dropdown-test').selectpicker('destroy');
    $('#dropdown-test').selectpicker();
    $('#btn-switch').text("Single-select");
    console.log('remove multiple');
    a = 1;
  }else{
    $('#dropdown-test').val('default');
  	$('#dropdown-test').attr("multiple","true");
    $('#dropdown-test').selectpicker('destroy');
    $('#dropdown-test').selectpicker();
    $('#btn-switch').text("Multi-select");
  	a = 0;
    console.log('add multiple');
  }
  $('.dropdown-test').selectpicker('refresh');
}