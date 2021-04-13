$(document).ready(function() {
    $('#phone').mask('+7 (999) 999-99-99');
      $('.form').validate({
        errorPlacement: function(error, element) {
        return true;
      },
        rules: {
                      телефон: {
                          required: true,
                      },
                      имя: {
                          required: true,
          },
          почта: {
            required: true,
          }
                  },
        submitHandler(form) {
          let th = $(form);
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: th.serialize(),
          }).done(() => {
              document.querySelector('.modals').classList.remove('is-open');
              // document.body.style.overflow = 'auto';
            th.trigger('reset');
            $('.overlay').fadeIn();
          });
          return false;
        }
      });
    });
  $('.close-popup').click(function() {
  $('.overlay').fadeOut();
  document.body.style.overflow = 'auto';
});