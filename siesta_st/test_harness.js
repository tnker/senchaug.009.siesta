var Harness = Siesta.Harness.Browser.SenchaTouch;

Harness.configure({
    title: 'Sencha Touch 2 App Test',
    loaderPath: {Siesta: 'app'},
    preload: [
        'touch/resources/css/sencha-touch.css',
        'touch/sencha-touch-all-debug.js'
    ]
});

Harness.start({
    group: 'View',
    items: [
        'tests/010_tabview.t.js'
    ]
});