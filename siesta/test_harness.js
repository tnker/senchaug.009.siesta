var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
	title: 'Siesta Test',
	loaderPath: {
		'Siesta': 'app'
	},
	preload: [
		'./ext/resources/css/ext-all.css',
		'./ext/ext-all-debug.js'
	]
});

Harness.start({
	group: 'Sample',
	items: [
		'tests/010_sample.t.js'
	]
}, {
	group: 'Model',
	items: [
		'tests/021_product.t.js'
	]
}, {
	group: 'View',
	items: [
		'tests/031_grid.t.js'
	]
}, {
	group: 'Input',
	items: [
		'tests/041_form.t.js'
	]
});