StartTest(function(t) {

    t.requireOk([
        'Siesta.model.Product',
        'Siesta.store.Products',
        'Siesta.view.Grid'
    ],
    function() {
        var grid;

        Ext.create('Siesta.store.Products', {
            storeId: 'Products'
        });

        grid = Ext.create('Siesta.view.Grid', {
            renderTo: Ext.getBody()
        });

        t.waitForRowsVisible(grid, function() {
            t.is(grid.store.getCount(), grid.getView().getNodes().length, 'Rendered Items OK');
            t.matchGridCellContent(grid, 0, 1, grid.store.first().get('name'), 'Found full name in first cell');
        });
    });

});