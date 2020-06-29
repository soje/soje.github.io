var getSpanWidth = function(array) {

    var widths = [];

    for (i = 0; i < array.length; i++) {
        var tmp = Array.prototype.slice.call(array[i]), posInfo = [];
        var a = [];
        for (j=0; j < tmp.length; j++) {
            posInfo = tmp[j].getBoundingClientRect();
            a.push(parseInt(posInfo.width));
        }
        widths.push(a);
    }

    return widths;

}

var setAnimWidthPropoerty = function(widths) {
        
    let values = widths, prefix = "--width-p-";

    for (let i=0; i<values.length; i++) {
        let parspans = values[i], width = 0;
        for(let j=0; j<parspans.length;j++){
            width += parspans[j];
            document.documentElement.style.setProperty(prefix + (i+1).toString() + '-span-' + (j+1).toString(), width.toString() + 'px');
        }
    }
}

var main = function() {
    
    var listLength = document.querySelectorAll('#lista-animata li').length,
    prefix = '#elemento-la-', paragraphsSpans = [];

    for (i=0; i<listLength; i++) {
        el = i+1;
        paragraphsSpans.push(document.querySelectorAll(prefix+el.toString() + ' span'));
    }

    var widths = getSpanWidth(paragraphsSpans);
    setAnimWidthPropoerty(widths);

    for (i=0; i<listLength; i++) {
        var widths = [];
        let el = i+1;

        let spans = document.querySelectorAll(prefix+el.toString() + ' .char-collapsed');
        
        let hovered = false, time;

        spans[0].onmouseover = function() {

            hovered = true;

            for (let j=0; j<spans.length; j++){
                spans[j].classList.remove('out', 'break');
                spans[j].classList.add('in');
            }

            time = setTimeout(function() {
                hovered =  false;
            }, 1500);

        }

        spans[0].onmouseout = function() {

            if(hovered == true) {

                clearInterval(time);

                for (let j=0; j<spans.length; j++){
                    spans[j].classList.remove('in');
                    spans[j].classList.add('break');
                }

                hovered = false;

            }else {

                for (let j=0; j<spans.length; j++){
                    spans[j].classList.remove('in');
                    spans[j].classList.add('out');
                }

                hovered = false

            }

        }

    }

}


if(document.readyState === "complete" || (document.readyState != "loading" && !document.documentElement.doScroll)){

    main();

}else {

    document.addEventListener("DOMContentLoaded", main);
    
}
