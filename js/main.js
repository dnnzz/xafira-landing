$(document).ready(function() {
    // Mobil menü toggle
    $('.mobile-menu-btn').click(function() {
        $('.nav-menu').slideToggle();
    });

    // Scroll animasyonu
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Form gönderimi
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        
        // Form verilerini al
        var formData = {
            name: $(this).find('input[type="text"]').val(),
            email: $(this).find('input[type="email"]').val(),
            message: $(this).find('textarea').val()
        };

        // Form gönderildiğinde
        alert('Mesajınız başarıyla gönderildi!');
        $(this)[0].reset();
    });

    // Oda kartları hover efekti
    $('.room-card').hover(
        function() {
            $(this).find('.room-info').slideDown(300);
        },
        function() {
            $(this).find('.room-info').slideUp(300);
        }
    );

    // Sayfa yüklendiğinde animasyon
    $(window).on('load', function() {
        $('.banner-content').fadeIn(1000);
        $('.about-content').fadeIn(1000);
        $('.rooms-grid').fadeIn(1000);
        $('.contact-content').fadeIn(1000);
    });

    // Smooth scroll için
    $('html').css('scroll-behavior', 'smooth');

    // Mobil menüde link tıklandığında menüyü kapat
    $('.nav-menu a').click(function() {
        if ($(window).width() <= 768) {
            $('.nav-menu').slideUp();
        }
    });
}); 