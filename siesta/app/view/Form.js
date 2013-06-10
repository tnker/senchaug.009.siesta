/**
 * 
 * 
 * @class Siesta.view.Form
 * @extends Ext.form.Panel
 */
Ext.define('Siesta.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',
    title: 'Product Form',

    labelWidth: 75,
    border: false,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        fieldLabel: 'ID',
        name: 'id',
        allowBlank:false
    },{
        fieldLabel: 'Product Name',
        name: 'name',
        allowBlank:false
    }],

    buttons: [{
        text: '保存',
        handler: function(comp) {
            var button = comp,
                form = comp.up('form');
                
            form.fireEvent('saveCommand', form);
        }
    },{
        text: 'キャンセル'
    }]
});