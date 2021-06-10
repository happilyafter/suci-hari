!(function($) {
    "use strict";
    
    // Set the count down timer
    if ($('.countdown').length) {
        var count = $('.countdown').data('count');
        var template = $('.countdown').html();
        $('.countdown').countdown(count, function(event) {
            $(this).html(event.strftime(template));
        });
    }
    
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        } else {
        $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });
    
    //get url custom
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }
        
        var sn = getParameterByName('to');
        document.getElementById("write").innerHTML = sn;

        
    // Modal Show
    $('#myModal').modal('show');

      // otomasi audio
      $('#modal-open').click(function() {
        musik.play();

        //Aos Init
        AOS.init();


    });
    
    // Owl Init
    $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
        0: {
        items: 1
        },
        768: {
        items: 1
        },
        900: {
        items: 2
        }
    }
    });



})(jQuery);

