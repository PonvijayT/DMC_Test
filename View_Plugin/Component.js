sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("company.custom.plugins.View_Plugin.View_Plugin.Component", {
		metadata: {
			manifest: "json"
		}
	});
});