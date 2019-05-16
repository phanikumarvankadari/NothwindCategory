/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/odata/nw/OdataModelSample/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});