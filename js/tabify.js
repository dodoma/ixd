; var bmoon = bmoon || {};
bmoon.tabify = {
    version: '1.0',

    init: function() {
        var o = bmoon.tabify;
        if (o.inited) return o;

        o.inited = true;
        return o;
    },

    onready: function() {
        var o = bmoon.tabify.init();

	    $(".tabs").tabify();
        o.bindClick();
    },

    bindClick: function() {
        var o = bmoon.tabify.init();
    }
};

$(document).ready(bmoon.tabify.onready);
