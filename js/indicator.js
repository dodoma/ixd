; var bmoon = bmoon || {};
bmoon.indicator = {
    version: '1.0',

    init: function() {
        var o = bmoon.indicator;
        if (o.inited) return o;

        o.e_content = $('#bd-middle');
        o.e_pnew_submit = $('#pnew-submit');
        o.e_pnew_submit_error = $('#pnew-submit-error');

        o.inited = true;
        return o;
    },

    onready: function() {
        var o = bmoon.indicator.init();

        o.bindClick();
    },

    bindClick: function() {
        var o = bmoon.indicator.init();

        o.e_pnew_submit.click(o.createNew);
        o.e_pnew_submit_error.click(o.createNewError);
    },

    createNew: function() {
        var o = bmoon.indicator.init();

        var p = $(this).parent();

        p.removeClass('success').removeClass('error').addClass('loading');

        setTimeout(function() {
            var o = bmoon.indicator.init();

            o.e_pnew_submit.parent().removeClass('loading').addClass('success');
        }, 2000);
        // $.getJSON('/json/plan/mine', {
        //     _op: 'mod',
        //     id: id,
        //     subscribe: sub,
        //     checkop: checkop
        // }, function(data) {
        //     p.removeClass('loading');
        //     if (data.success == '1') {
        //         p.addClass('success');
        //     } else {
        //         p.addClass('error');
        //         $('<span class="vres">' + data.errmsg + '</span>').appendTo(p);
        //     }
        // });
    },

    createNewError: function() {
        var o = bmoon.indicator.init();

        var p = $(this).parent();

        p.removeClass('success').removeClass('error').addClass('loading');

        setTimeout(function() {
            var o = bmoon.indicator.init();

            o.e_pnew_submit_error.parent().removeClass('loading').addClass('error');
        }, 2000);
    }
};

$(document).ready(bmoon.indicator.onready);
