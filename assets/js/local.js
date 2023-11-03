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
    
    
    let mouseX = 0, mouseY = 0;
    let xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY; 
    });
    
    setInterval(function(){
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);
    
    
    $("a,button,input").hover(function(){
        $("#circle").addClass("active");
    }, function (){
        $("#circle").removeClass("active");
    });
    
});