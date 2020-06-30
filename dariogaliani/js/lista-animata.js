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
    prefix = '#elemento-la-', paragraphsSpans = [], animTimes = ['3000', '3500', '2500', '3000', '3000'];

    for (i=0; i<listLength; i++) {
        el = i+1;
        paragraphsSpans.push(document.querySelectorAll(prefix+el.toString() + ' span'));
    }

    var widths = getSpanWidth(paragraphsSpans);
    setAnimWidthPropoerty(widths);

    for (let i=0; i<listLength; i++) {

        let el = i+1, spans = document.querySelectorAll(prefix+el.toString() + ' .char-collapsed'),
        hovered = false, time;

        spans[0].onmouseenter = function() {

            hovered = true;

            for (let j=0; j<spans.length; j++){
                spans[j].classList.remove('out', 'break');
                spans[j].classList.add('in');
            }

            time = setTimeout(function() {
                hovered =  false;
            }, animTimes[i]);

        }

        spans[0].onmouseleave = function() {

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
