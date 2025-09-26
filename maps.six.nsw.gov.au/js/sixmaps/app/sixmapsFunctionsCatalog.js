{
	"rightAlignFormatter": function(value){
		return '<div style="text-align: right">' + value + '</div>';
	},
	"currencyDollarsFormatter": function(value){
		if (value == null || value == "null" || value == "Null" || value == "NULL") return "";
		value += '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(value)) {value = value.replace(rgx, '$1' + ',' + '$2');}			  					
			return "<div style='text-align: right'>$" + value + "</div>";
	},
	"thousandsFormatter": function(value){
		if (value == null || value == "null" || value == "Null" || value == "NULL") return "";
		value += '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(value)) {value = value.replace(rgx, '$1' + ',' + '$2');}			  					
			return "<div style='text-align: right'>" + value + "</div>";
	},
	"shortDateFormatter": function(value){
		if (!value){
			return value
		} else {
			var d = new Date(value);
			return dojo.date.locale.format(d,{selector: "date", datePattern: "dd-MM-yyyy"});
		}
	},
	"ignoreStringNull": function(value){
		if (!value || !value.replace){
			return value;
		} else {
			return value.replace(/\bnull\b/ig,'');
		}
	},
	"lotSizeFormatter": function(cadid,idx,cell){
		var i = cell.grid.getItem(idx);
		var feature = cell.grid.store.getValue(i,"_feature");
		var geom = esri.geometry.webMercatorToGeographic(feature.geometry)
		var area = esri.geometry.geodesicAreas([geom], esri.Units.SQUARE_METERS)[0];		
		return sixmaps.dijits.tools.Measure.prototype.formatArea(area);		
	},
	"lotIdStringCombiner": function(obj){
		var plannumberContainsType = ("" + obj.plannumber).match(/^DP|^SP/i);
		return (obj.lotnumber || "") + "/" + (obj.sectionnumber || "") + "/" + (plannumberContainsType ? "" : obj.plantype || "DP") + obj.plannumber;
	},
	"addLayerFormatter": function(idx,param,param2){
		var me = this;
		return "<center><a href='#' onclick='addLayer("+idx+");'><img src='/apps/channels/images/math-add-icon.png' /></a></center>";
	}
}