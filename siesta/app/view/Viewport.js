Ext.define('Siesta.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.grid.Panel'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'myform',
            height: 120
        },
        {
            xtype: 'mygrid',
            flex: 1
        }
    ]
});