/*jslint node: true */
'use strict';
const constants = require('ocore/constants.js');
const conf = require('ocore/conf');
const db = require('ocore/db');
const eventBus = require('ocore/event_bus');
const validationUtils = require('ocore/validation_utils');
const headlessWallet = require('headless-obyte');
const administrator = 'device_address';

eventBus.once('headless_wallet_ready', () => {
	headlessWallet.setupChatEventHandlers();
	eventBus.on('object', (from_address, object) => {
		const device = require('ocore/device.js');
		if (from_address === administrator)
			device.sendMessageToDevice(from_address, 'object', {
				runtime: '',
				material: '',
				attribute_3: '',
				attribute_4: ''
			});
	});

});

process.on('unhandledRejection', up => {
	throw up;
});
