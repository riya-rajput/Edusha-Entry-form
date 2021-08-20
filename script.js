var errorNull = true, errorMail = true, errorPass = true;
var checkNull = function(){
  $(this).val($(this).val().trim());
  if ($(this).val() =="") {
    $(this).notify("fill in the box", "error");
    $(this).addClass("errtextbox");
    errorNull = true;
  } else {
    errorNull = false;
    $(this).removeClass("errtextbox");
  }
};

$("#name").focusout(checkNull);
$("#info").focusout(checkNull);

$("#name").keyup(function(){
  var value = $(this).val();
  if (value.length > 24){ 
    $(this).notify("Maximum 25 characters", "info");
    $(this).val(value.slice(0,24));
  }
});

$("#mail").focusout(function(){
  var value = $(this).val().trim();
  if (value.search(/^[a-z0-9]{3,}@mail\.com$/i) != 0) {
    $(this).notify("E-mail enter properly", "error");
    $(this).addClass("errtextbox");
    errorMail = true;
  } else { 
    $(this).removeClass("errtextbox");
    errorMail = false;
  }
});

$("#password1").focusout(function(){
  var value = $(this).val();
  if (value.length <= 4) { 
    $(this).notify("Minimum 5 characters", "error");
    $(this).addClass("errtextbox");
    errorPass = true;
  } else {
    if (value.length > 9) {
      $(this).notify("Maximum 10 characters", "error");
      $(this).addClass("errtextbox");
      errorPass = true;
    } else {
      errorPass = false;
      $(this).removeClass("errtextbox");
    }
  }
});

$("#password2").focusout(function(){
  var value = $(this).val();
  if (value != $("#password1").val()) {
    $(this).notify("enter a valid number", "error");
    $(this).addClass("errtextbox");
    errorPass = true;
  } else {
    errorPass = false;
    $(this).removeClass("errtextbox");     
  }
});

$("#send").click(function(){
  if (!(errorNull || errorMail || errorPass)) {
    $("#regForm").submit();
  } else {
    $(this).notify("already registered", "error");
  }
});