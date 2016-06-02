; var bmoon = bmoon || {};
bmoon.accordion = {
    version: '1.0',

    init: function() {
        var o = bmoon.accordion;
        if (o.inited) return o;

        o.e_content = $('#bd-middle');

        o.inited = true;
        return o;
    },

    onready: function() {
        var o = bmoon.accordion.init();

        o.bindClick();
    },

    bindClick: function() {
        var o = bmoon.accordion.init();

        $(".accordion .section-head").click($(this).toggleAccordion);
    }
};

$(document).ready(bmoon.accordion.onready);
