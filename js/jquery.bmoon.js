;(function($) {
    $.fn.mtoggleClass = function(opts) {
        opts = $.extend({
            classname: 'error',
            leaveClass: true,
            interval: 500,
            time: 0
        }, opts || {});

        $(this).each(function(i, obj) {
            obj = $(obj);
            if (!obj._blinkID) {
                obj._blinkID = setInterval(function() {
                    obj.toggleClass(opts.classname);
                }, opts.interval);
            }

            if (opts.time) {
                setTimeout(function() {
                    clearInterval(obj._blinkID);
                    if (opts.leaveClass) obj.addClass(opts.classname);
                }, opts.interval*2*opts.time);
            }
        });
    };

    $.fn.pressEnter = function(fn) {
        return this.each(function() {
            $(this).bind('enterPress', fn);
            $(this).keyup(function(e){
                if(e.keyCode == 13)
                {
                    $(this).trigger("enterPress");
                }
            })
        });
    };

    $.fn.toggleAccordion = function(fn) {
        $(this).next().toggleClass('expanded');
    };
})(jQuery);
