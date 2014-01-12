build: compress run
filename = wikiReader.nw

compress:
		@zip -r $(filename) app package.json node_modules

run:
		@open $(filename)

test:
		@mocha app/test -R spec
