/**
 * 
 * 
 * @class Siesta.view.Grid
 * @extends Ext.grid.Panel
 */
Ext.define('Siesta.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid',
    title: 'Products List',
    store: 'Products',
    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            xtype: 'numbercolumn',
            format: '0',
            align: 'right'
        },
        {
            text: 'Name',
            dataIndex: 'name',
            align: 'left',
            flex: 1
        }
    ]
});