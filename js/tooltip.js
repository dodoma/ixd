; var bmoon = bmoon || {};
bmoon.tooltip = {
    version: '1.0',

    init: function() {
        var o = bmoon.tooltip;
        if (o.inited) return o;

        o.e_content = $('#bd-middle');
        o.e_tips = $('input, a', '#plan-list');
        o.e_pnew_submit_error = $('#pnew-submit-error');

        o.inited = true;
        return o;
    },

    onready: function() {
        var o = bmoon.tooltip.init();

        o.e_tips.tooltip({
            tipClass: 'tipsy tipsy-south',
            layout: '<div><div class="tipsy-inner"/></div>'
        });

        o.bindClick();
    },

    bindClick: function() {
        var o = bmoon.tooltip.init();

    }
};

$(document).ready(bmoon.tooltip.onready);
