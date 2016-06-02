FILES = b/base.css b/base.js

all: preload $(FILES)

preload:
	@mkdir -p b/

b/base.css: css/reset.css css/base.css css/conv.css css/layout.css

b/base.js: js/jquery-1.7.1.js js/jquery.cookie.js js/jquery.hotkeys.js \
           js/jquery.bmoon.js js/bmoon.js

%.css:
	@echo -n > $@
	cat $^ > $@

%.js:
	@echo -n > $@
	cat $^ > $@


clean:
	@rm -f $(FILES)
