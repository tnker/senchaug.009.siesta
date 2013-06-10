StartTest(function(t) {

	t.diag('Hello World!!');

	t.ok(Ext, 'ExtJS is here');

	t.requireOk('Siesta.controller.Main', function() {
		t.done();
	});

});