(function($) {
	$.fn.tabify = function(options) {
		var defaults = {
            onShow: null,
            tabIndex: 0
        };

		var options = $.extend(defaults, options);

		return this.each(function() {
			var self = $(this);

			$(this).find(".window").hide();
			//$(this).find(".window:first").show();
			//$(this).find("ul li:first").addClass('active');
            $(this).find(".window").eq(options.tabIndex).show();
            $(this).find("ul li").eq(options.tabIndex).addClass('active');

            if (jQuery.isFunction(options.onShow)) {
                //options.onShow($(this).find("ul li:first"));
                options.onShow($(this).find("ul li").eq(options.tabIndex));
            }

			$(this).find("ul li a").click(function(){

				self.find("li").removeClass('active');
				self.find(".window").hide();

				$(this).parent().addClass('active');
				var id = $(this).attr('href');
				$(id).show();

                if (jQuery.isFunction(options.onShow)) {
                    options.onShow($(this).parent());
                }

				return false;
				void(0);

			});

            $.extend(this, {
                tabNext: function() {
                    $(this).find("ul li.active").next().find('a').trigger('click');
                }
            });

            return this;
		});

	}
})(jQuery);
