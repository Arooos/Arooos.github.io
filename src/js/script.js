// const animItems = document.querySelectorAll('.promo')
// if (animItem.length > 0) {
//     function animOnScroll(params) {
//         for (let index = 0; index < animItems,length; index++) {
//             const animItem = animItem[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = 
//         }
//     }
//     function offset(el)
//         const rect = el.getBoundingClientRect(),
//             scrollleft = win
// }

$(document).ready(function(){

    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"></button>'
    });
    $('.carousel__history').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"></button>'
    });

    
    $('[data-modal=tournament]').on('click', function(){
        $('.overlay, #tournament').fadeIn('o.5s');
    })
    $('[data-modal=participants]').on('click', function(){
        $('.overlay, #participants').fadeIn('o.5s');
    })
    $('[data-modal=workout]').on('click', function(){
        $('.overlay, #workout').fadeIn('o.5s');
    })
    $('.modal_close').on('click', function(){
        $('.overlay, #tournament, #participants, #workout, #thanks').fadeOut('o.5s')
    })

    $('order form').validate();
    
    function valideForms(form){
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required'
            },  
            messages: {
                name: 'Пожалуйста, введите своё имя',
                phone: 'Пожалуйста, введите свой номер телефона'
            }
        });
    };
    valideForms('#tournament form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "telegram.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#tournament').fadeOut();
            $('.overlay, #thanks').fadeIn('0.5s');

            $('form').trigger('reset');
        });
        return false;
    }); 

    $("#modal").on("show", function () {
        $("body").addClass("modal-open");
    }).on("hidden", function () {
        $("body").removeClass("modal-open")
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() >650) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
});
