/**
 * 
 * 
 * @class Siesta.store.Products
 * @extends Ext.data.Store
 */
Ext.define('Siesta.store.Products', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Siesta.model.Product',
        proxy: {
            type: 'memory',
            reader: {
                type: 'json'
            }
        }
    },
    data:[
        {id: 1, name: 'Sencha Complete 1.0.2.8'},
        {id: 2, name: 'Sencha Complete 1.0.1.15'},
        {id: 3, name: 'Sencha Touch Complete 2.2.1'},
        {id: 4, name: 'Sencha Ext JS 4.2.1'},
        {id: 5, name: 'Sencha Ext JS 4.2.0'},
        {id: 6, name: 'Sencha Ext JS 3.4.1.1'}
    ]
});