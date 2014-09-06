
// Turn this into modules for each segment
// First will be sign up module

$(document).ready(function() {

  $('.signup__alert').on('click', function() {

    console.log("Clicked!");
    if ($('form input[name=alertType]:checked').val() == 'Email') {
      $('.signup__alert--email').show();
      $('.signup__alert--number').hide();
    }
    else if ($('form input[name=alertType]:checked').val() == 'Text') {
      $('.signup__alert--number').show();
      $('.signup__alert--email').hide();
    }

  })
  
})