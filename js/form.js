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
              document.body.style.overflow = 'auto';
            th.trigger('reset');
            $('.js-overlay-thank-you').fadeIn();
          });
          return false;
        }
      });
    });
  $('.js-close-thank-you').click(function() {
  $('.js-overlay-thank-you').fadeOut();
});