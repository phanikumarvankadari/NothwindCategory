sap.ui.define([
			"sap/ui/core/mvc/Controller",
			"sap/m/ObjectListItem"
		], function (Controller,ObjectListItem) {
			"use strict";

			return Controller.extend("com.odata.nw.OdataModelSample.controller.Main", {
				onInit: function () {

				},
				onCategoryChange: function (e) {
					
					var context = e.getParameters().selectedItem.getBindingContext('NWM');

					var oHCategory = this.getView().byId('oHCategory');
						var oList = this.getView().byId('listPrs');
						
						
					if (oHCategory !== undefined) {
						oHCategory.setBindingContext(context, 'NWM');
							oList.setBindingContext(context, 'NWM');
					}
					
				//	list.unbindItems();
					this.debug();
				


						},
						debug:function () {
									console.log('dbg');
						}
					});
			});