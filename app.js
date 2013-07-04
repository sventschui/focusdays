/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({

    requires: [
        'Partner.controller.MetadataProvider'
    ],
    models: [
        'PartnerInfoModel',
        'PresentationObject',
        'Property',
        'PropertyText',
        'Settings'
    ],
    stores: [
        'PartnerInfoStore',
        'MetadataStore',
        'SettingsStore'
    ],
    views: [
        'PartnerSearchView',
        'MainNavigation',
        'PartnerList',
        'MetadataTextField',
        'MetadataButton',
        'PartnerDetailView'
    ],
    controllers: [
        'PartnerSearchController',
        'SettingsProvider'
    ],
    name: 'Partner',

    launch: function() {
        // Settings
        var settingsStore = Ext.getStore('settingsStore');

        if (settingsStore.data.length === 0) {
            // Neues settings objekt
            settingsStore.data.add(new Partner.model.Settings());
        }

        var mdProvider = new Partner.controller.MetadataProvider();

        // Initiales Laden: Nicht unbedingt nötig
        var pos = [
        'PoPartnerDetail',
        'PoPartnerInfo',
        'PartnerSucheView',
        'PartnerDetailView'
        ];

        mdProvider.load(pos, settingsStore.data.first().get('locale'));

        Ext.create('Partner.view.MainNavigation', {fullscreen: true});
    }

});

