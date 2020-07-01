/* $(document).ready(function() {

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

    $('#m-list-uno').hover(function(){
        $('#link-uno').toggleClass('show');
    });

    $('#m-nav-link-due').hover(function(){
        $('#link-due').toggleClass('show');
    });

    $('#m-nav-link-tre').hover(function(){
        $('#link-tre').toggleClass('show');
    });

    $('#m-nav-link-quattro').hover(function(){
        $('#link-quattro').toggleClass('show');
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

}); */

function main() {

    var masterhead = document.querySelector('.masterhead'), navibar = document.querySelector('.navibar'),
    masterheadHeigth = masterhead.getBoundingClientRect().height;

    window.onscroll = function() {
        last_know_scroll_position = window.scrollY;
        
        if(last_know_scroll_position >= masterheadHeigth) {
            navibar.classList.add('show');
            if( document.querySelector('.navibar.hide') ){
                navibar.classList.remove('hide');
            }
        }else {
            if( document.querySelector('.navibar.show') ){
                navibar.classList.remove('show');
                navibar.classList.add('hide');
            }

            setTimeout(function() {navibar.classList.remove('hide');}, 300);

        }

    }
}

if(document.readyState === "complete" || (document.readyState != "loading" && !document.documentElement.doScroll)){

    main();

}else {

    document.addEventListener("DOMContentLoaded", main);
    
}