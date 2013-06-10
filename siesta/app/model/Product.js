/**
 * 
 * 
 * @class Siesta.model.Product
 * @extendsExt.data.Model 
 */
Ext.define('Siesta.model.Product', {
    extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'string'},
		{name: 'name', type: 'string'}
	]
});