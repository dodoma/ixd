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

    function calculateRectangle(origin, scale, pointa, pointb) {
        var pa = [(pointa[0] - origin.x) / scale.x, (pointa[1] - origin.y) / scale.y],
            pb = [(pointb[0] - origin.x) / scale.x, (pointb[1] - origin.y) / scale.y];

        return {
            x: parseInt(_min(pa[0], pb[0])),
            y: parseInt(_min(pa[1], pb[1])),
            w: parseInt(abs(pa[0] - pb[0])),
            h: parseInt(abs(pa[1] - pb[1]))
        }
    }

    function actualPoint(origin, scale, point) {
        return [(point[0] - origin.x) / scale.x, (point[1] - origin.y) / scale.y];
    }

    _mmath = {
        calculateRectangle: calculateRectangle,
        actualPoint: actualPoint
    };
})(jQuery);
