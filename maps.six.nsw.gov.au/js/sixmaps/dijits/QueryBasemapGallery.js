define([
    "dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/fx",
	"dojo/_base/lang",
	"dojo/io/script",
	"dojo/aspect",
	"dojo/Deferred",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/on",
	"dojo/when",
	"dijit/_base/popup",
	"dijit/TooltipDialog",
	"esri/arcgis/utils",
	"esri/dijit/BasemapGallery",
	"esri/geometry/Extent",
	"esri/geometry/scaleUtils",
	"esri/geometry/screenUtils",
	"esri/layers/ArcGISImageServiceLayer",
	"esri/layers/ImageServiceParameters",
	"esri/layers/OpenStreetMapLayer",
	"esri/virtualearth/VETiledLayer",
	"esri/utils",
	"sixmaps/map/layers/Json"
],function(array, declare, fx, lang, script, aspect, Deferred, domClass, domConstruct, domGeom, domStyle, on, when, dijitPopup, TooltipDialog, 
	arcgisUtils, BasemapGallery, Extent, scaleUtils, screenUtils, ArcGISImageServiceLayer, ImageServiceParameters, OpenStreetMapLayer, VETiledLayer, esriUtils, Json){

	var QueryBasemapGallery = declare("sixmaps.dijits.QueryBasemapGallery",[BasemapGallery], {
		// summary:
		//		Basemap gallery which extends esri.dijits.QueryBasemapGallery.
		// description:
		//		Basemap gallery which shows maps that can be used. It was
		//		modified to use own basemaps, compared to ESRI version.
		
		query: 'title:"ArcGIS Online Basemaps"',
		basemapDetails: null,
		activeLayers: [],
		basemapsLoaded: null,
		constructor: function(params, srcNodeRef) {
			// summary:
			//		A reference to the constructor function for this object.
			// params:object
			//		Set of parameters used to create basemap gallery.
		
			var me = this;
			me.basemapDetails = [];
			declare.safeMixin(me, params);
			!me.basemapsLoaded && (me.basemapsLoaded = new Deferred());
		},
		_findArcGISBasemapsGroup: function(){
			var me = this;
			this._basemapGalleryGroupQuery = me.query;
			this.inherited(arguments);
		},
		_handleArcGISBasemapsResponse: function(items){
			var me = this;
			me.inherited(arguments);
			var itemHash = {};
			array.forEach(items,function(item){
				itemHash["" + item.id] = item;
			});
			array.forEach(this.basemaps, function(basemap){
				var details = itemHash["" + basemap.itemId]; 
				details && (basemap.details = details);
			});
		},
		
		_switchBasemapLayers: function(){
			var me = this;
			!me.basemapsLoaded && (me.basemapsLoaded = new Deferred());
			me._switchBasemapLayers = function(){};
			me.loaded && fireLoaded();
			!me.loaded && aspect.after(me,"onLoad",function(){
				fireLoaded();
			});
			function fireLoaded(){
				me.basemapsLoaded && !me.basemapsLoaded.isFulfilled() && me.basemapsLoaded.resolve();
			}
		},
		
		_setForegroundBasemapAttr: function (basemap) {
			var me = this;
			me.foregroundBasemap && array.forEach(me.foregroundBasemap.layers, function(layer){
				layer.realLayer && me.map.removeLayer(layer.realLayer);
			});
			me.processLayers(basemap,me.backgroundBasemap && me.backgroundBasemap.layers.length);
			me.foregroundBasemap = basemap;
		},
		
		_setBackgroundBasemapAttr: function(basemap){
			var me = this;
			me.backgroundBasemap && array.forEach(me.backgroundBasemap.layers, function(layer){
				layer.realLayer && me.map.removeLayer(layer.realLayer);
			});
			me.processLayers(basemap);
			me.backgroundBasemap = basemap;
		},
		
		processLayers: function(basemap,index){
			// summary:
			//		Checks each layer and loads the map layers for each basemap.
			//		Also sets the opacity for the layers.
			
			var me = this;
			array.forEach(basemap.layers, function(layer,i) {
				var newLayer = me.loadLayer(layer);
				if (newLayer) {
					newLayer._basemapGalleryLayerType = "basemap";
					me.checkScale(newLayer);
					typeof basemap.opacity != undefined && newLayer.setOpacity(basemap.opacity);
					me.map.addLayer(newLayer, i + (index||0));
					me.activeLayers.push(newLayer);
					layer.realLayer = newLayer;
					newLayer.isBaseMapLayer = true;
				}
			});
		},
		
		checkScale: function (layer){
			// summary:
			//		Determines whether the basemap layer should be shown based on the predefined
			//		set scale for the particular layer.
			var me = this;
			var scale = scaleUtils.getScale(me.map);
			var withinScale = true;
			if (layer.maxScale && (Math.round(scale) < Math.round(layer.maxScale))){
				withinScale = false;
			}
			if (withinScale && layer.minScale && (Math.round(scale) > Math.round(layer.minScale))){
				withinScale = false;
			}
			if (withinScale){
				!layer.visible && layer.setVisibility(true);
			} else {
				layer.visible && layer.setVisibility(false);
			}
		},
		
		loadLayer: function(layer){
			// summary:
			//		Handles the loading of the layer.
			// layer:object
			//		Extends esri.layers.Layer.
			
			var me = this;
			var newLayer;
			if (me.map.layerIds.length > 0 && me.map.getNumLevels() === 0 && (layer.type === "OpenStreetMap" || layer.type && layer.type.indexOf("BingMaps") > -1)) {
				var msg = "esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.";
				me.onError(msg);
				return;
			} 
			if (!layer.isReference && layer.type && layer.type.indexOf("BingMaps") > -1 && !me.bingMapsKey) {
				var msg = "esri.dijit.BasemapGallery: Invalid Bing Maps key.";
				me.onError(msg);
				return;
			}
			if (layer.declaredClass == "sixmaps.dijits.BasemapLayer"){
				var params = {};
				layer.serviceInfoResponse && (params.resourceInfo = layer.serviceInfoResponse);
				layer.params = lang.mixin(layer.params,params);
				newLayer = Json.fromJson(layer);
				layer.maxScale && (newLayer.maxScale = layer.maxScale);
				layer.minScale && (newLayer.minScale = layer.minScale);
			} else {
				if (true || !layer.isReference) {
					if (layer.type === "OpenStreetMap") {
						if (me.map.layerIds.length > 0 && me.map.getNumLevels() === 0) {
							var msg = "esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.";
							me.onError(msg);
							return;
						}
						newLayer = new OpenStreetMapLayer({id: "layer_osm", opacity: layer.opacity});
					} else {
						if (layer.type && layer.type.indexOf("BingMaps") > -1) {
							if (me.map.layerIds.length > 0 && me.map.getNumLevels() === 0) {
								var msg = "esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.";
								me.onError(msg);
								return;
							}
							var mapStyle = VETiledLayer.MAP_STYLE_AERIAL_WITH_LABELS;
							if (layer.type == "BingMapsAerial") {
								mapStyle = VETiledLayer.MAP_STYLE_AERIAL;
							} else {
								if (layer.type == "BingMapsRoad") {
									mapStyle = VETiledLayer.MAP_STYLE_ROAD;
								}
							}
							newLayer = new VETiledLayer({
								id: "layer_bing", bingMapsKey: me.bingMapsKey, mapStyle: mapStyle, opacity: layer.opacity});
						} else {
							if (layer.serviceInfoResponse && layer.serviceInfoResponse.mapName) {
								if ((me.map.layerIds.length === 0 || me.map.getNumLevels() > 0) && layer.serviceInfoResponse.singleFusedMapCache === true) {
									newLayer = me._loadAsCached(layer);
								} else {
									newLayer = me._loadAsDynamic(layer);
								}
							} else {
								if (layer.serviceInfoResponse && layer.serviceInfoResponse.pixelSizeX) {
									var serviceParams = new ImageServiceParameters;
									serviceParams.bandIds = layer.bandIds;
									if (!layer.bandIds && layer.serviceInfoResponse.bandCount && parseInt(layer.serviceInfoResponse.bandCount) > 3) {
										serviceParams.bandIds = [0, 1, 2];
									}
									newLayer = new ArcGISImageServiceLayer(layer.url, {
										resourceInfo: layer.serviceInfoResponse, opacity: layer.opacity, visible: layer.visibility, imageServiceParameters: serviceParams});
								}
							}
						}	
					}
				}
			}
			return newLayer;
		},
		
		createBasemapThumbs: function(){
			// summary:
			//		Creates the small tile with an example of the map and the map name (in spanner).
			
			var me = this;
			var dfd = new Deferred();
			var waiting = 0;
			array.forEach(me.basemaps,function(basemap){
				waiting++;
				basemap.thumbNode = domConstruct.create("div",{"data-basemapID":basemap.id});
				domStyle.set(basemap.thumbNode,{paddingTop:"2px",paddingBottom:"2px",position:"relative",width:"105px",top:"0px",left: "0px",display:"inline-block","cursor":"pointer"});
				var thumb = domConstruct.create("img",{
					src:basemap.thumbnailUrl,"class":"esriBasemapGalleryThumbnail",
					style:"display:inline-block;margin-bottom:0px;border:1px solid #4D6895;border-radius:10px;"
				},basemap.thumbNode);
				domStyle.set(thumb,{"display":"block","marginLeft":"auto","marginRight":"auto"});
				var labelContainer = domConstruct.create("div",{"class":"thumbnailLabelContainer"},basemap.thumbNode);
				domConstruct.create("div",{innerHTML:"<b>" + basemap.title + "</b>", "class":"thumbnailLabel"},labelContainer);
				var details = domConstruct.create("div",{innerHTML:"<br/><br/><b>" + basemap.title + "</b><br/><br/>",style:"max-width:200px;"});
				if (!basemap.hasLayerInfo){
					var loadingMsg = domConstruct.create("span",{"class":"dojoxGridLoading",innerHTML:"Loading basemap info..."});
					domConstruct.place(loadingMsg,details);
					var basemapInfo;
					if (basemap.itemId) { // ArcGIS.com basemaps
						var deferredInfo = arcgisUtils.getItem(basemap.itemId);
						basemapInfo = new Deferred();
						when(deferredInfo,function(info){
							basemapInfo.resolve(info.itemData.baseMap.baseMapLayers);
						});
					} else if (basemap.layers) {
						basemapInfo = basemap.layers;
					}
					when(basemapInfo,function(layers){
						basemap.layers = layers;
						var deferredCount = basemap.layers.length;
						var layersComplete = new Deferred();
						array.forEach(basemap.layers,function(layer){
							if (layer.url) {
								var deferredData = script.get({url:layer.url,callbackParamName:"callback",content:{f:"json"}});
								when(deferredData,function(data){
									layer.serviceInfoResponse = data;
									deferredCount--;
									if (deferredCount == 0) {
										layersComplete.resolve();
									}
								});
							} else {
								deferredCount--;
								if (deferredCount == 0) {
									layersComplete.resolve();
								}
							}
						});
						when(layersComplete,function(){
							basemap.hasLayerInfo = true;
							me.createBasemapDetails(details,basemap);
							waiting--;
							!waiting && dfd.resolve();
						});
					});
				}
			});
			return dfd;
		},
		
		addThumb: function(basemap,gallery,pos){
			// summary:
			//		Adds the created thumb to the basemap gallery (spanner).
			//		it handles the selection of the tile.
			
			var me = this;
			domConstruct.place(basemap.thumbNode,gallery,pos);
			basemap.myConnects.push(on(basemap.thumbNode,"click",function(){
				me.onBasemapSelected(basemap);
			}));
		},
		
		onBasemapSelected: function(basemap){
			// summary:
			//		Event which is called by addThumb. Handles the fade in and out of the
			//		details window which shows when the mouse hovers over the tile.
			
			var me = this;
			clearTimeout(me.popupTimer);
			basemap.detailsNode.openAnim && basemap.detailsNode.openAnim.stop();
			basemap.detailsNode.closeAnim && basemap.detailsNode.closeAnim.play();
		},
		
		createBasemapDetails:function(node,basemap){
			// summary:
			//		Provides the information in the information window (i). It uses a tile of the map to
			//		display what the map looks like and adds in additional information below it.
			
			var me = this;
			node.innerHTML = "";
			if (!basemap.hasLayerInfo){
				var loadingMsg = domConstruct.create("span",{"class":"dojoxGridLoading",innerHTML:"Loading basemap info..."});
				domConstruct.place(loadingMsg,node);
			}
			domClass.add(node,"basemapPopup");
			var thumbDiv = domConstruct.create("div",{"class":"basemapThumbnailLarge"},node,"first");
			array.forEach(basemap.layers,function(layer){
				var scale = scaleUtils.getScale(me.map);
				layer.withinScale = true;
				if (layer.maxScale && Math.round(scale) < Math.round(layer.maxScale)){
					layer.withinScale = false;
				}
				if (layer.withinScale && (layer.minScale && Math.round(scale) > Math.round(layer.minScale))){
					layer.withinScale = false;
				}
				
				/* Create layer infoLayer */
				if (me.loadLayer){
					layer.infoLayer = me.loadLayer(layer);
				} else if (basemap.title === "OpenStreetMap"){
					layer.infoLayer = new OpenStreetMapLayer();
				} else if (layer.serviceInfoResponse && layer.serviceInfoResponse.singleFusedMapCache === true){
					layer.infoLayer = me._loadAsCached(layer);
				} else {
					layer.infoLayer = me._loadAsDynamic(layer);
				}
	
				/* Get candidate tile info & create tileUrl for layer */
				var tileUrl;
				if (layer.infoLayer && layer.infoLayer.tileInfo){
					layer.tileInfo = esri.TileUtils.getCandidateTileInfo(me.map, layer.infoLayer.tileInfo,me.map.extent);
					var col = layer.tileInfo.tile.coords.col + Math.round((me.map.width / 2) / layer.infoLayer.tileInfo.width);
					var row = layer.tileInfo.tile.coords.row + Math.round((me.map.height / 2) / layer.infoLayer.tileInfo.height);
					tileUrl = layer.infoLayer.getTileUrl(layer.tileInfo.lod.level,row,col);
				} else if (layer.infoLayer) {
					tileUrl = new Deferred();
					var screenCentre = screenUtils.toScreenGeometry(me.map.extent,me.map.width,me.map.height,me.map.extent.getCenter());
					var previewExtent = new Extent(screenCentre.x - 100,screenCentre.y - 100,screenCentre.x + 100, screenCentre.y + 100);
					previewExtent = screenUtils.toMapGeometry(me.map.extent,me.map.width,me.map.height,previewExtent);
					layer.infoLayer.getImageUrl(previewExtent,200,200,function(url){tileUrl.resolve(url)});
				} else {
					tileUrl = basemap.thumbnailUrl;
				}
				
				/* Create layer tile image if layer visible */
				var createImg = true;
				if (layer.displayLevels && (array.indexOf(layer.displayLevels,layer.tileInfo.lod.level) < 0)){
					createImg = false;
				} else if (layer.tileInfo && (Math.round(scaleUtils.getScale(me.map)) != Math.round(layer.tileInfo.lod.scale))){
					createImg = false;
				} else if (!layer.withinScale){
					createImg = false;
				} else if (!layer.infoLayer){
					createImg = false;
				}
				if (createImg) {
					when(tileUrl,function(tileUrl){
						var tileImg = domConstruct.create("img",{src:tileUrl},thumbDiv);
						domStyle.set(tileImg,{"top":"0px","left":"0px","position":"absolute","width":"200px","height":"200px"});
					});
				}
			});
			/* Title */
			var titleDiv = domConstruct.create("div",{innerHTML:"<br/>",style:"width:100%;font-weight:bold;text-align:center;"},node);
			var titleTxt = document.createTextNode(basemap.title);
			domConstruct.place(titleTxt,titleDiv);
			
			var detailsNode = domConstruct.create("div",null,node);
			var urlNode = domConstruct.create("div",{style:{"width":"100%","textAlign":"center","paddingTop":"10px"}},node);
			
			/* Copyright & Snippet for LPI basemaps */
			if (!basemap.details){
				array.forEach(basemap.layers, function(layer){
					var layerVisible = true;
					if (layer.displayLevels && (array.indexOf(layer.displayLevels,layer.tileInfo.lod.level) < 0)){
						layerVisible = false;
					} else if (layer.tileInfo && (Math.round(scaleUtils.getScale(me.map)) != Math.round(layer.tileInfo.lod.scale))){
						layerVisible = false;
					}
					if (layerVisible && layer.withinScale){
						/* Snippet */
						if (layer.serviceInfoResponse && layer.serviceInfoResponse.documentInfo){
							if (layer.serviceInfoResponse.documentInfo.Comments){
								var snippetSpan = domConstruct.create("span",{innerHTML:"<br/>"},detailsNode);
								var snippetTxt = document.createTextNode(layer.serviceInfoResponse.documentInfo.Comments);
								domConstruct.place(snippetTxt,snippetSpan);
								var snippetBreak = domConstruct.create("span",{innerHTML:"<br/>"});
								domConstruct.place(snippetBreak,snippetSpan);
							}
							/* Copyright */
							if (layer.serviceInfoResponse && layer.serviceInfoResponse.documentInfo.Credits || layer.serviceInfoResponse.documentInfo.Author){
								var source = (layer.serviceInfoResponse.documentInfo.Credits) ? layer.serviceInfoResponse.documentInfo.Credits : layer.serviceInfoResponse.documentInfo.Author;  
								var copyrightSpan = domConstruct.create("span",{innerHTML:"<br/>"},detailsNode);
								var copyrightTxt = document.createTextNode(source);
								domConstruct.place(copyrightTxt,copyrightSpan);
							} 
						}
						/* Url */
						/*
						if (layer.url || layer.serviceInfoResponse.url){
							dojo.create("a",{href:layer.url || layer.serviceInfoResponse.url, target:"_blank",innerHTML:"Details"},urlNode);
						}
						*/
					}
				});
			} else if (basemap.details && basemap.details.snippet){ /* Snippet - Non-LPI basemaps */
				var snippetArr = basemap.details.snippet.split(".");
				var snippetTxt;
				if (snippetArr.length > 1) {
					snippetTxt = document.createTextNode(snippetArr[0] + ".");
				} else {
					snippetTxt = document.createTextNode(basemap.details.snippet);
				}
				var snippetSpan = domConstruct.create("span",{innerHTML:"<br/>"},detailsNode);
				domConstruct.place(snippetTxt,snippetSpan);
			}
			/* Url */
			var itemUrl;
			if (basemap.itemId) { /*Arcgis.com Basemap */
				itemUrl = "http://www.arcgis.com/home/item.html?id=" + basemap.itemId;
			} else if (basemap.url){
				itemUrl = basemap.url;
			}
			itemUrl && domConstruct.create("a",{style:{paddingLeft:"10px"},href:itemUrl, target:"_blank",innerHTML:"Details"},urlNode);
			basemap.metadataUrl && domConstruct.create("a",{style:{paddingLeft:"10px"},href:basemap.metadataUrl, target:"_blank",innerHTML:"Metadata"},urlNode);
			
			basemap.detailsNode = new TooltipDialog({content:node});
			domClass.add(basemap.detailsNode.domNode, "dijitTooltipLeft");
			domStyle.set(basemap.detailsNode.domNode,"marginTop","-23px");
		}
		
	});
	return QueryBasemapGallery;
});