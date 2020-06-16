$(document).ready(function() {

    $('#sidebarCollapse, #dismiss').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true').attr('aria-expanded', 'false');

        if($('#sidebarCollapse').css('display') == 'none') {
            $('#sidebarCollapse').css('display', 'block');
        }else{
            $('#sidebarCollapse').css('display', 'none');
        }


    });
    
});

$(window).scroll(function(){
    var contentTop = $('#content').offset().top,
        altezzaScroll_Y = $(this).scrollTop();

        if(altezzaScroll_Y > contentTop) {
            $('#sidebarCollapse').css('display', 'block');
        } else if(altezzaScroll_Y < contentTop){
            $('#sidebarCollapse').css('display', 'none');
            if(($('#sidebar, #content').hasClass('active'))){
                $('#sidebar, #content').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true').attr('aria-expanded', 'false');
            }
        }

});