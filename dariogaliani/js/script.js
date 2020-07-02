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