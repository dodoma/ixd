; var bmoon = bmoon || {};
bmoon.overlay = {
    version: '1.0',

    init: function() {
        var o = bmoon.overlay;
        if (o.inited) return o;

        o.e_popup = $('#popup');
        o.e_opener = $('#open-popup');

        o.inited = true;
        return o;
    },

    onready: function() {
        var o = bmoon.overlay.init();

        o.r_popup = o.e_popup.popup({blur: false, dragable: true, outline: true});

        o.bindClick();
    },

    bindClick: function() {
        var o = bmoon.overlay.init();

    },

    togglePopup: function() {
        var o = bmoon.overlay.init();
    }
};

$(document).ready(bmoon.overlay.onready);
