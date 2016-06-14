; var bmoon = bmoon || {};
bmoon.tabify = {
    version: '1.0',

    init: function() {
        var o = bmoon.tabify;
        if (o.inited) return o;

        o.e_content = $('#bd-middle');
        o.e_dock = $('#dock');
        o.e_dock_buttons = $('.dock-button', '#dock');
        o.e_dock_views = $('.dock-view', '#dock');

        o.inited = true;
        return o;
    },

    onready: function() {
        var o = bmoon.tabify.init();

        o.bindClick();
    },

    bindClick: function() {
        var o = bmoon.tabify.init();

        o.e_dock_buttons.click(o.dockView);
        $('a', o.e_dock_views).click(o.hideDockView);
    },

    dockView: function() {
        var o = bmoon.tabify.init();

        var button = $(this), p = $(this).parent();

        button.toggleClass('selected');
        $('.dock-view', p).toggleClass('hide');

        $.each(o.e_dock_views, function(i, obj) {
            if (obj != $('.dock-view', p)[0]) {
                $(obj).addClass('hide');
                $('.dock-button', $(obj).parent()).removeClass('selected');
            }
        });
    },

    hideDockView: function() {
        var o = bmoon.tabify.init();

        var li = $(this).parent().parent().parent();

        $('.dock-view', li).addClass('hide');
        $('.dock-button', li).removeClass('selected');
    }
};

$(document).ready(bmoon.tabify.onready);
