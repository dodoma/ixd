;(function($) {

    function _min(a, b) {
        if (a > b) return b;
        else return a;
    }

    function _max(a, b) {
        if (a > b) return a;
        else return b;
    }

    var abs = Math.abs, PI = Math.PI;

    // 查找路径中可用于拖拽的顶点
    function pathVertex(c, type, path) {
        var vertex = [], p = [];

        switch (type) {
        case 'rectangle':
            // 矩形 {x, y, w, h} 取右下角端点
            p = [path.x + path.w, path.y + path.h];
            vertex.push(p);
            break;
        case 'circle':
            // 圆形 {x, y, r} 取最下方端点
            p = [path.x, path.y + path.r];
            vertex.push(p);
            break;
        default:
            break;
        }

        return vertex;
    }

    // 点 是否在 路径中
    function pointInPath(c, point, type, path) {
        //console.log(JSON.stringify(point) + 'in' + type + JSON.stringify(path) + '?');
        switch (type) {
        case 'rectangle':
            c.beginPath();
            c.rect(path.x, path.y, path.w, path.h);
            return c.isPointInPath(point[0], point[1]);
        case 'circle':
            c.beginPath();
            c.arc(path.x, path.y, path.r, 0, 2 * PI);
            return c.isPointInPath(point[0], point[1]);
        default:
            return false;
        }
    }

    _mcanvas = {
        pathVertex: pathVertex,
        pointInPath: pointInPath
    };
})(jQuery);
