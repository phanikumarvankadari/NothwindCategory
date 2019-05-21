sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.odata.nw.OdataModelSample.controller.Main", {
		onInit: function () {

		},
		onCategoryChange:function(e){
			console.log('dbg');
			var context =e.getParameters().selectedItem.getBindingContext('NWM');
			
			var oHCategory = this.getView().byId('oHCategory');
			if(oHCategory !== undefined){
				oHCategory.setBindingContext(context,'NWM');
			}
			var list = this.getView().byId('listPrs');
				list.unbindItems();
				
			list.bindItems(	{
								path:context.getPath()+'/Products/',
								template:this.getView().byId('oli')
						
							}
						);
			
			
		},
		debug:function(){
			
			
		}
	});
});