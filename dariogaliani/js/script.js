$(document).ready(function() {

    $('#sidebarCollapse, #dismiss').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true').attr('aria-expanded', 'false');

        if($('#sidebarCollapse').css('display') == 'none') {
            $('#sidebarCollapse').css('display', 'block')
        }else{
            $('#sidebarCollapse').css('display', 'none');
        }
    });
    
});