;(function($) {

    function _min(a, b) {
        if (a > b) return b;
        else return a;
    }

    function _max(a, b) {
        if (a > b) return a;
        else return b;
    }

    var abs = Math.abs;

    function calculateRectangle(pointa, pointb) {
        return {
            x: _min(pointa[0], pointb[0]),
            y: _min(pointa[1], pointb[1]),
            w: abs(pointa[0] - pointb[0]),
            h: abs(pointa[1] - pointb[1])
        }
    }

    _mmath = {
        calculateRectangle: calculateRectangle
    };
})(jQuery);
