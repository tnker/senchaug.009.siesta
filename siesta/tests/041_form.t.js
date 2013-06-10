StartTest(function(t) {

    var nameValue = 'Sencha Touch 3.0',
        idValue = 99;

        t.requireOk(
            [
                'Siesta.model.Product',
                'Siesta.store.Products',
                'Siesta.view.Form'
            ],
            function() {
                var rec, form,
                    nameFld, idFld, saveButton,
                    sync = t.beginAsync();

                rec = Ext.create('Siesta.model.Product');
                Ext.create('Siesta.store.Products', {
                    storeId: 'Products'
                });

                form = Ext.create('Siesta.view.Form', {
                    width: 500,
                    renderTo: Ext.getBody()
                });

                nameFld = form.down('textfield[name=name]');
                idFld = form.down('textfield[name=id]');
                saveButton = form.down('button[text=保存]');

                form.on('saveCommand', function(form) {
                    var values = form.getValues();
                    t.diag('保存ボタンがクリックされました');
                    t.is(values.name, nameValue, 'nameフィールドの一致');
                    t.is(values.id, idValue, 'idフィールドの一致');
                    t.endAsync(sync);
                });
                form.loadRecord(rec);
                t.chain({
                    action: 'type',
                    target: idFld,
                    text: idValue
                }, {
                    action: 'type',
                    target: nameFld,
                    text: nameValue
                }, {
                    action: 'click',
                    target: saveButton
                })
            }
        );

});