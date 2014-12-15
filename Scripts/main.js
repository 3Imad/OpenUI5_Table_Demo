﻿requirejs.config({
    //script base
    baseUrl: 'Scripts/',
    paths: {
        'bootstrap': 'bootstrap.min',
        'knockout': 'knockout-3.2.0',
        'underscore': 'underscore-min',
        'underscore.string': 'underscore.string.min',
        'k': 'vendor/kendo',
        'base64': 'vendor/helpers/base64v1_0',
        'md5': 'vendor/cryptojs/rollups/md5',
        'sha1': 'vendor/cryptojs/rollups/sha1',
        'sha256': 'vendor/cryptojs/rollups/sha256',
        'sha512': 'vendor/cryptojs/rollups/sha512',
        'sha3': 'vendor/cryptojs/rollups/sha3',
        'ripemd160': 'vendor/cryptojs/rollups/ripemd160',
        'advarics.app': 'advarics',
        'advarics.controls': 'advarics/controls/advarics.controls',
        'advarics.grid': 'advarics/controls/advarics.grid',
        'advarics.models': 'advarics/models/advarics.models',
        'advarics.config': 'advarics/config/advarics.config'
    },

    'shim': {
        underscore: {
            'exports': '_'
        },
        knockout: {
            'exports': 'ko'
        },
        base64: {
            'exports': 'B64'
        }
    }
});

requirejs(['advarics/app'], function (app) {
    console.log('Executing app.init()');
    app.init();
});