$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                infinite: true,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
      $('ul.catalog__taps').on('click', 'li:not(.catalog__tap_active)', function() {
        $(this)
          .addClass('catalog__tap_active').siblings().removeClass('catalog__tap_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });




      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            
          })
        })
      };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      // modal
      
      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });

      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thx, #order').fadeOut('slow')
      });


      $('.button_mini').each(function(i) {
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });

     

      function validateForms(form) {
        $(form).validate({
          rules:{
            name: "required",
            phone: "required",
            email: {
              required: true,
              email:true
            }
          }
        });
      }

      validateForms('#consultation-form');
      validateForms('#order form');
      validateForms('#consultation form');

      $('input[name=phone]').mask("+38 (999) 999-99-99");
  });