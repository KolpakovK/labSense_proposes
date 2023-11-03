$(document).ready(function () {
    $('.menu-toggle').click(function () {
        let windowHeight = $(window).height();
        
        let heightNeeded = $(".mobile-menu").height()>0 ? 0 : windowHeight;
        
        if (heightNeeded>0) $(".mobile-menu").toggleClass('active');
        $(".mobile-menu").animate({ height: heightNeeded}, 700, function(){
            $(".mobile-menu .tabs").toggleClass('active');
            $(".mobile-menu .contact-panel").toggleClass('active');
        });
        if (heightNeeded==0) $(".mobile-menu").toggleClass('active');
    });

    $('#phone-input').inputmask('(999) 999-9999');
    
});