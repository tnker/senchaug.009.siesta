StartTest(function(t) {

    t.requireOk('Siesta.model.Product', function() {

        var model = Ext.create('Siesta.model.Product', {
            id: 10,
            name: 'Siesta Test Model'
        });

        t.is(model.get('id'), 10, 'Create Siesta Test Model!!');
    });

});