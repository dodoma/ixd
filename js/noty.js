; var bmoon = bmoon || {};
bmoon.notysample = {
    version: '1.0',

    init: function() {
        var o = bmoon.notysample;
        if (o.inited) return o;

        o.e_content = $('#bd-middle');
        o.e_btn1 = $('#btn1');
        o.e_btn2 = $('#btn2');

        o.inited = true;
        return o;
    },

    onready: function() {
        var o = bmoon.notysample.init();

        var n = noty({
            text: '我擦',
            // animation: {
            //     open: {height: 'toggle'}, // jQuery animate function property object
            //     close: {height: 'toggle'}, // jQuery animate function property object
            //     easing: 'swing', // easing
            //     speed: 500 // opening & closing animation speed
            // }
            animation: {
                open: 'animated flipInX', // Animate.css class names
                close: 'animated flipOutX', // Animate.css class names
                easing: 'swing', // unavailable - no need
                speed: 500 // unavailable - no need
            }
        });

        o.bindClick();
    },

    bindClick: function() {
        var o = bmoon.notysample.init();

        o.e_btn1.click(function() {
            var o = bmoon.notysample.init();

            var n = noty({text: 'test', type: 'information', layout: 'topRight', timeout: 2000});
        });

        o.e_btn2.click(function() {
            var o = bmoon.notysample.init();

            var n = noty({
                text: 'test', type: 'warning', layout: 'topCenter',
                buttons: [
                    {
                        addClass: 'red-btn btn-primary',
                        text: 'Ok',
                        onClick: function($noty) {

				            // this = button element
				            // $noty = $noty element

				            $noty.close();
				            noty({text: 'You clicked "Ok" button', type: 'success'});
			            }
		            },
		            {
                        addClass: 'btn btn-danger',
                        text: 'Cancel',
                        onClick: function($noty) {
				            $noty.close();
				            noty({text: 'You clicked "Cancel" button', type: 'error'});
			            }
		            }
                ]
            });
        });
    }
};

$(document).ready(bmoon.notysample.onready);


// $.noty.defaults = {
//     layout: 'top',
//     theme: 'defaultTheme', // or 'relax'
//     type: 'alert',
//     text: '', // can be html or string
//     dismissQueue: true, // If you want to use queue feature set this true
//     template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
//     animation: {
//         open: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceInLeft'
//         close: {height: 'toggle'}, // or Animate.css class names like: 'animated bounceOutLeft'
//         easing: 'swing',
//         speed: 500 // opening & closing animation speed
//     },
//     timeout: false, // delay for closing event. Set false for sticky notifications
//     force: false, // adds notification to the beginning of queue when set to true
//     modal: false,
//     maxVisible: 5, // you can set max visible notification for dismissQueue true option,
//     killer: false, // for close all notifications before show
//     closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
//     callback: {
//         onShow: function() {},
//         afterShow: function() {},
//         onClose: function() {},
//         afterclose: function() {},
//         oncloseclick: function() {},
//     },
//     buttons: false // an array of buttons
// };
