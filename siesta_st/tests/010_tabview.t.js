StartTest(function(t) {
    t.diag('View Test');
    t.requireOk(
        [
            'Siesta.view.Main'
        ],
        function() {
            Ext.create('Siesta.view.Main', {
                fullscreen: true
            });
            t.waitForSelector('.x-container', function() {
                t.chain(
                    {action: 'wait', delay: 2000},
                    {action: 'drag', target: '>>container[title=Welcome]', by: [0, 200]},
                    {action: 'wait', delay: 1000},
                    {action: 'drag', target: '>>container[title=Welcome]', by: [0, -200]},
                    {action: 'wait', delay: 1000},
                    {action: 'tap', target: '.x-tab .action'},
                    {action: 'wait', delay: 1000},
                    {action: 'tap', target: '.x-tab .home'},
                    {action: 'wait', delay: 1000}
                );
            });
        }
    );
});