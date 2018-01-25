FILES = b/base.css b/base.js

all: preload $(FILES)

preload:
	@mkdir -p b/

b/base.css: css/reset.css css/base.css css/conv.css css/layout.css css/indicator.css animate/animate.css

b/base.js: js/jquery-2.2.4.js js/jquery.cookie.js js/jquery.hotkeys.js js/jquery.md5.js \
           js/jquery.bmoon.js js/bmoon.js js/bmoon.math.js js/bmoon.canvas.js \
           js/jquery.mninpval.js js/jquery.mntable.js \
           noty/js/noty/packaged/jquery.noty.packaged.js \
           app/js/bmoon.js

%.css:
	@echo -n > $@
	cat $^ > $@

%.js:
	@echo -n > $@
	cat $^ > $@


clean:
	@rm -f $(FILES)
