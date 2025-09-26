{
	"extent": {
		"xmin": 15303304,
		"ymin": -4869955,
		"xmax": 17807993,
		"ymax": -3152874,
		"spatialReference": {
			"wkid": 3857
		}
	},
	"slider": {
		"top": "100px",
		"left": "30px",
		"width": null,
		"height": "170px",
		"labels": null,
		"sliderLabel": {
			"tick": 5,
			"labels": null
		}
	},
	"operationalLayers": {
		"maritime": {
			"url": "${arcGISServerUrl}/sixmaps/MaritimePublic/MapServer",
			"params": {
				"name": "Maritime",
				"counters": [
					{
						"url": "${arcGISServerUrl}/sixmaps/MaritimePublic/MapServer/0",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 30
					}
				],
				"opacity": 0.8
			}
		},
		"lotLabels": {
			"url": "${arcGISServerUrl}/sixmaps/Plan_Section_Lot/MapServer",
			"type": "sixmaps/map/layers/DynamicFCLayer",
			"filter": "outlineGlow",
			"params": {
				"name": "Lot Labels",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B6196A3CF-4327-40AB-B6BB-8655E7FCBB05%7D?f=html",
				"counters": [
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/6",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"opacity": 1
			},
			"visibleLayers": [
				1,
				2,
				3
			]
		},
		"surveyMarks": {
			"url": "${arcGISServerUrl}/sixmaps/SurveyMarksPublic/MapServer",
			"params": {
				"name": "Survey Marks",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B3CD9D91C-FA11-4FDC-95ED-56DBA1CF4E3C%7D?f=html",
				"counters": [
					{
						"url": "${arcGISServerUrl}/sixmaps/SurveyMarksPublic/MapServer/0",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"opacity": 1
			},
			"legendParams": {
				"show": true,
				"html": "<img src='${apiUrl}sixmaps/app/images/surveyMarkLegend2020.png' alt='Survey Marks Legend' width='500' height='345'/>"
			}
		},
		"lotBoundaries": {
			"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
			"type": "sixmaps/map/layers/DynamicFCLayer",
			"params": {
				"name": "Lot Boundaries",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B0A6AA566-AFFC-4932-AC60-71144956CF77%7D?f=html",
				"opacity": 1,
				"counters": [
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/6",
						"maxFeatureCount": 250
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"imageParameters":{
					"format": "png32"
				}
			},
			"restrictAreaField": "SE_Area(shape)",
			"visibleLayers": [
				6
			]
		},
		"SurveyMarkGDA94FS": {
			"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA94/FeatureServer/0",
			"id": "SurveyMarkGDA94FS",
			"type":"esri.layers.FeatureLayer",
			"visible": false,
			"params": {
						"name": "Survey Marks GDA94 FeatureServer",
						"opacity": 1,
						"outFields":["marktype", "marknumber", "markstatus", "monumenttype"],
						"labelingInfo":[{
							"type":"esri.layers.LabelClass"
						}]
			}
		},
		"SurveyMarkGDA94_multiCRSFS": {
			"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA94_multiCRS/FeatureServer/0",
			"id": "SurveyMarkGDA94_multiCRSFS",
			"type":"esri.layers.FeatureLayer",
			"visible": false,
			"params": {
						"name": "Survey Marks GDA94_multiCRS FeatureServer",
						"opacity": 1,
						"outFields":["marktype", "marknumber", "markstatus", "monumenttype"],
						"labelingInfo":[{
							"type":"esri.layers.LabelClass"
						}]
			}
		},
		"SurveyMarkGDA2020FS": {
			"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA2020/FeatureServer/0",
			"id": "SurveyMarkGDA2020FS",
			"type":"esri.layers.FeatureLayer",
			"visible": false,
			"params": {
						"name": "Survey Marks GDA2020 FeatureServer",
						"opacity": 1,
						"outFields":["marktype", "marknumber", "markstatus", "monumenttype"],
						"labelingInfo":[{
							"type":"esri.layers.LabelClass"
						}]
			}
		},
		"SurveyMarkGDA2020_multiCRSFS": {
			"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA2020_multiCRS/FeatureServer/0",
			"id": "SurveyMarkGDA2020_multiCRSFS",
			"type":"esri.layers.FeatureLayer",
			"visible": false,
			"params": {
						"name": "Survey Marks GDA2020_multiCRS FeatureServer",
						"opacity": 1,
						"outFields":["marktype", "marknumber", "markstatus", "monumenttype"],
						"labelingInfo":[{
							"type":"esri.layers.LabelClass"
						}]
			}
		},
		"SurveyMarkGDA94MS": {
			"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA94/MapServer",
			"params": {
				"name": "Survey Marks GDA94 MapServer",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B3CD9D91C-FA11-4FDC-95ED-56DBA1CF4E3C%7D?f=html",
				"counters": [
					{
						"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA94/MapServer/0",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"opacity": 1
			},
			"legendParams": {
				"show": true,
				"html": "<img src='${apiUrl}sixmaps/app/images/surveyMarkLegend2020.png' alt='Survey Marks Legend' width='500' height='345'/>"
			}
		},
		"SurveyMarkGDA94_multiCRSMS": {
			"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA94_multiCRS/MapServer",
			"params": {
				"name": "Survey Marks GDA94_multiCRS MapServer",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B3CD9D91C-FA11-4FDC-95ED-56DBA1CF4E3C%7D?f=html",
				"counters": [
					{
						"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA94_multiCRS/MapServer/0",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"opacity": 1
			},
			"legendParams": {
				"show": true,
				"html": "<img src='${apiUrl}sixmaps/app/images/surveyMarkLegend2020.png' alt='Survey Marks Legend' width='500' height='345'/>"
			}
		},
		"SurveyMarkGDA2020MS": {
			"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA2020/MapServer",
			"params": {
				"name": "Survey Marks GDA2020 MapServer",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B3CD9D91C-FA11-4FDC-95ED-56DBA1CF4E3C%7D?f=html",
				"counters": [
					{
						"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA2020/MapServer/0",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"opacity": 1
			},
			"legendParams": {
				"show": true,
				"html": "<img src='${apiUrl}sixmaps/app/images/surveyMarkLegend2020.png' alt='Survey Marks Legend' width='500' height='345'/>"
			}
		},
		"SurveyMarkGDA2020_multiCRSMS": {
			"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA2020_multiCRS/MapServer",
			"params": {
				"name": "Survey Marks GDA2020_multiCRS MapServer",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B3CD9D91C-FA11-4FDC-95ED-56DBA1CF4E3C%7D?f=html",
				"counters": [
					{
						"url": "https://portal.spatial.nsw.gov.au/server/rest/services/SurveyMarkGDA2020_multiCRS/MapServer/0",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"opacity": 1
			},
			"legendParams": {
				"show": true,
				"html": "<img src='${apiUrl}sixmaps/app/images/surveyMarkLegend2020.png' alt='Survey Marks Legend' width='500' height='345'/>"
			}
		},
		"NSW_Imagery": {
			"url": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Imagery/MapServer",
			"params": {
				"name": "NSW Imagery",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B3CD9D91C-FA11-4FDC-95ED-56DBA1CF4E3C%7D?f=html",
				"counters": [
					{
						"url": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Imagery/MapServer/0",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"opacity": 1
			},
			"legendParams": {
				"show": true,
				"html": "<img src='${apiUrl}sixmaps/app/images/surveyMarkLegend2020.png' alt='Survey Marks Legend' width='500' height='345'/>"
			}
		},
		"NSW_Base_Map": {
			"url": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Base_Map/MapServer",
			"params": {
				"name": "NSW Base Map",
				"metadata":"https://sdi.nsw.gov.au/rest/document/%7B3CD9D91C-FA11-4FDC-95ED-56DBA1CF4E3C%7D?f=html",
				"counters": [
					{
						"url": "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Base_Map/MapServer/0",
						"maxFeatureCount": 150
					},
					{
						"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
						"maxFeatureCount": 3
					}
				],
				"opacity": 1
			},
			"legendParams": {
				"show": true,
				"html": "<img src='${apiUrl}sixmaps/app/images/surveyMarkLegend2020.png' alt='Survey Marks Legend' width='500' height='345'/>"
			}
		},
		"dynamicLabels": {
			"type": "esri.layers.ArcGISDynamicMapServiceLayer",
			"url": "${arcGISServerUrl}/sixmaps/LPI_RasterLabels_1/MapServer",
			"params": {
				"id": "Dynamic Labels",
				"name": "Dynamic Labels",
				"opacity": 1
			},
			"mixinParams": {
				"metadata":"https://sdi.nsw.gov.au/rest/document/%257B7C765E81-32F7-4879-9E32-828CA1E99D65%257D?f=html"
			}
		},
		"dynamicBoundaries": {
            "type": "esri.layers.ArcGISDynamicMapServiceLayer",
            "url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
            "params": {
                "id": "Dynamic Boundaries",
                "name": "Dynamic Boundaries",
                "opacity": 1
            },
            "listLayers": true,
            "includeLayerIDs": [4, 5],
            "subLayerDetails":{
            	"4": "https://sdi.nsw.gov.au/rest/document/%7B742DED82-236C-4B7F-9BC8-FA49ADD01838%7D?f=html",
            	"5": "https://sdi.nsw.gov.au/rest/document/%7B302F87EE-33F5-475A-A22B-D6BD0F966B09%7D?f=html"
            }
        },
		"LGABoundaries": {
			"type": "esri.layers.ArcGISDynamicMapServiceLayer",
			"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
			"params": {
            	"id": "LocalGovernmentArea",
            	"name": "LGA Boundaries",
            	"opacity": 1
			},
			"mixinParams":{
				"metadata":"https://sdi.nsw.gov.au/rest/document/81412DF6-F7E1-42CB-8CD9-47C6200B742E?f=html"
			},
			"visible": true,
			"visibleLayers": [1]
		},
		"blackLotBoundaries": {
			"type": "esri.layers.ArcGISDynamicMapServiceLayer",
			"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
			"params": {
				"id": "Lot Boundaries",
				"name": "Lot Boundaries",
				"opacity": 1
			},
			"listLayers": false,
			"visibleLayers": [
				15
			],
			"includeLayerIDs": [
				15
			]
		},
		"propertyBoundaries": {
			"type": "esri.layers.ArcGISDynamicMapServiceLayer",
			"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
			"params": {
				"id": "Property Boundaries",
				"name": "Property Boundaries",
				"opacity": 1
			},
			"mixinParams": {
				"metadata": "https://sdi.nsw.gov.au/rest/document/%7B7C75F280-C0A8-4102-8E28-03FC1A741D90%7D?f=html"
			},
			"listLayers": false,
			"visibleLayers": [
				12,
				13,
				14
			],
			"includeLayerIDs": [
				12,
				13,
				14
			]
		},
		"floodFootprint": {
			"type": "esri.layers.FeatureLayer",
			"url": "${arcGISServerUrl}/sixmaps/Flood/MapServer/0",
			"params": {
            	"id": "floodFootprint",
            	"name": "Flood Footprint",
            	"opacity": 1
			},
			"mixinParams":{
				"metadata": "https://sdi.nsw.gov.au/rest/document/%7BFB66A219-0775-4098-BAA5-8191CE23D46D%7D?f=html"
			},
			"visible": false
		},
		"floodImagery": {
            "type": "esri.layers.ArcGISTiledMapServiceLayer",
            "url": "${arcGISServerUrl}/sixmaps/Flood/MapServer",
			"params": {
				"id": "floodImagery",
				"name": "Flood Imagery",
				"tileServers": [
					"${tileServerUrl1}/arcgis/rest/services/sixmaps/Flood/MapServer",
					"${tileServerUrl2}/arcgis/rest/services/sixmaps/Flood/MapServer",
					"${tileServerUrl3}/arcgis/rest/services/sixmaps/Flood/MapServer",
					"${tileServerUrl4}/arcgis/rest/services/sixmaps/Flood/MapServer"
				]
        	},
            "mixinParams": {
                "metadata": "https://sdi.nsw.gov.au/rest/document/%7BFB66A219-0775-4098-BAA5-8191CE23D46D%7D?f=html"
            }
        },
        "floodImageryCIR": {
            "type": "esri.layers.ArcGISTiledMapServiceLayer",
            "url": "${arcGISServerUrl}/sixmaps/FloodCIR/MapServer",
			"params": {
				"id": "floodImageryCIR",
				"name": "Flood Imagery CIR",
				"tileServers": [
					"${tileServerUrl1}/arcgis/rest/services/sixmaps/FloodCIR/MapServer",
					"${tileServerUrl2}/arcgis/rest/services/sixmaps/FloodCIR/MapServer",
					"${tileServerUrl3}/arcgis/rest/services/sixmaps/FloodCIR/MapServer",
					"${tileServerUrl4}/arcgis/rest/services/sixmaps/FloodCIR/MapServer"
				]
        	},
            "mixinParams": {
                "metadata": "https://sdi.nsw.gov.au/rest/document/%7BFB66A219-0775-4098-BAA5-8191CE23D46D%7D?f=html"
            }
        }
	},
	"tools": {
		"fullExtent": {
			"type": "sixmaps.dijits.tools.FullExtent"
		},
		"prevExtent": {
			"type": "sixmaps.dijits.tools.PrevExtent"
		},
		"nextExtent": {
			"type": "sixmaps.dijits.tools.NextExtent"
		},
		"measureDistance": {
			"type": "sixmaps.dijits.tools.Measure",
			"params": {
				"title": "Distance Tool"
			}
		},
		"measureArea": {
			"type": "sixmaps.dijits.tools.Measure",
			"params": {
				"title": "Area Tool",
				"mode": "area"
			}
		},
		"measurement": {
			"type": "sixmapsd.dijits.tools.Measurement",
			"params": {
				"title": "Measurement Tool"
			}
		},
		"coordinate": {
			"type": "sixmaps.dijits.tools.Coordinate",
			"params": {
				"title": "Coordinate Tool"
			},
			"paneParams": {
				"position": {
					"top": "150px",
					"left": "550px"
				},
				"size": {
					"maxWidth": "245px"
				}
			}
		},
		"identify": {
			"link": "catalog.tools.identifyBase",
			"params": {
				"services": [
					{
						"link": "catalog.identifyServices.lot"
					},
					{
						"link": "catalog.identifyServices.suburb"
					},
					{
						"link": "catalog.identifyServices.lga"
					},
					{
						"link": "catalog.identifyServices.address"
					},
					{
						"link": "catalog.identifyServices.Imagery"
					}
				]
			}
		},
		"identifyBase": {
			"type": "sixmaps.dijits.tools.Identify",
			"paneClass": null,
			"identifyResultsParams": {},
			"params": {
				"title": "Identify Tool",
				"resultsWidgetType": "sixmaps.dijits.tools.IdentifyResultsList",
				"toolConfigs": [
					{
						"link": "catalog.drawTools.point",
						"params": {
							"label": "Identify features by point",
							"message": "Click a point on the map to identify surrounding features."
						}
					},
					{
						"link": "catalog.drawTools.rectangle",
						"params": {
							"label": "Identify features by rectangle",
							"message": "Draw a rectangle on the map to identify features within."
						}
					},
					{
						"link": "catalog.drawTools.polygon",
						"params": {
							"label": "Identify features by polygon",
							"message": "Draw a polygon on the map to identify features within."
						}
					}
				]
			}
		},
		"printPreview": {
			"type": "sixmaps.dijits.tools.App",
			"params": {
				"iconUrl": "images/printPreview.png",
				"title": "Print Preview",
				"onActivate": "displayPrintPreview"
			}
		},
		"printPDF": {
			"type": "sixmaps.dijits.tools.WidgetTool",
			"paneParams": {
				"position": {
					"position": "absolute",
					"top": "100px",
					"left": "370px"
				}
			},
			"params": {
				"title": "Print/PDF Tool",
				"iconUrl": "images/printPreview.png",
				"widgetType": "sixmaps/app/Print",
				"widgetParams": {
					"templates": [
						{
							"link": "catalog.printTemplates.landscape"
						},
						{
							"link": "catalog.printTemplates.portrait"
						}
					]
				}
			}
		},
		"legend": {
			"type": "sixmaps.dijits.tools.Legend"
		},
		"imageDropper":{
            "type": "sixmaps.dijits.tools.WidgetTool",
            "params": {
                "title": "Image Dropper",
                "widgetType": "sixmaps.dijits.ImageViewer",
                "iconUrl": "images/projector.png"
            }
		},
		"csvDropper": {
			"type": "sixmaps.dijits.tools.WidgetTool",
			"graphicsParams": {
				"filter": "url(css/resources.svg#dropShadow)"
			},
			"params": {
				"title": "CSV Dropper",
				"showSettings": true,
				"iconUrl": "images/csv.png",
				"widgetType": "sixmaps.dijits.FeedMapper",
				"baseUrl": "",
				"widgetParams": {
					"dropPrompt": "<br/><b>Drop a .csv file here...</b><br/><br/>",
					"style": {
						"maxWidth": "600px",
						"overflow": "auto"
					},
					"layout": [
						{
							"field": "Lot",
							"width": "30px"
						},
						{
							"field": "DP",
							"width": "100px"
						},
						{
							"field": "Comments",
							"width": "250px"
						}
					],
					"matchHelp": "Records will be matched on the following fields:<br /><ul><li> Property ID (propid)</li><li>Suburb</li><li>Lot</li><li>Local Government Area (LGA)</li></ul>",
					"queryUrl": "${arcGISServerUrl}/sixmaps/LPIMap/MapServer/65",
					"matchers": [
						{
							"fields": {
								"propid": "^prop(erty)?_?id"
							},
							"inQueryField": "propid",
							"queryUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/22"
						},
						{
							"fields": {
								"suburbname": "^suburb"
							},
							"queryUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0"
						},
						{
							"fields": {
								"lotnumber": "^(lot( ?_?(num(ber)?)|no)?)$",
								"sectionnumber": {
									"regExp": "^(section( ?_?(num(ber)?)|no)?)$",
									"optional": true
								},
								"plannumber": "^((plan|dp)( ?_?(num(ber)?)|no)?)$"
							},
							"matchField":{
								"name":"lotidstring",
								"getter": "${functionCatalog.lotIdStringCombiner}"
							},
							"inQueryField":"lotidstring",
							"queryUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/6"
						},
						{
							"fields": {
								"lganame": {
									"regExp": "^(lga|local ?government ?area)$",
									"params": {
										"searchType": "startsWith",
										"ignoreCase": true
									}
								}
							},
							"queryUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/1",
							"maxAllowableOffset": 100
						},
						{
							"fields": {
								"address": {
									"regExp": "^address$",
									"params": {
										"type": "string",
										"width": "30em"
									}
								}
							},
							"inQueryField":"address",
							"queryUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/22"
						}
					]
				}
			},
			"paneParams": {
				"position": {
					"top": "150px",
					"left": "550px"
				}
			}
		},
		"splash": {
			"type": "sixmaps.app.SplashTool"
		}
	},
	"splash": {
		"type": "sixmaps.app.SplashTool"
	},
	"defaultTools": [
		{
            "link": "catalog.tools.fullExtent"
        },
        {
            "link": "catalog.tools.prevExtent"
        },
        {
            "link": "catalog.tools.nextExtent"
        }
	],
	"drawTools": {
		"point": {
			"type": "sixmaps.dijits.tools.WidgetDraw",
			"params": {
				"label": "Draw point",
				"iconUrl": "images/crosshair.png",
				"mode": "point"
			}
		},
		"rectangle": {
			"type": "sixmaps.dijits.tools.WidgetDraw",
			"params": {
				"label": "Draw rectangle",
				"iconUrl": "images/rectangle.png",
				"mode": "extent"
			}
		},
		"polygon": {
			"type": "sixmaps.dijits.tools.WidgetDraw",
			"params": {
				"label": "Draw polygon",
				"iconUrl": "images/polygon.png",
				"mode": "polygon"
			}
		}
	},
	"identifyServices": {
		"address": {
			"url": "${arcGISServerUrl}/sixmaps/PropertyAddress/MapServer",
			"featureCountParams": {
				"type": "sixmaps.map.layers.FeatureCount",
				"params": {
					"counters": [
						{
							"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/6",
							"maxFeatureCount": 150
						},
						{
							"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
							"maxFeatureCount": 3
						}
					]
				}
			},
			"layerParams": [
				{
					"title": "Address",
					"resultsWidgetType":"sixmaps/dijits/takeMeTo/AddressResults",
					"autoWidth": true,
					"layerName": "Property",
					"resultsWidgetParams":{
						"queryUrl": "${arcGISServerUrl}/sixmaps/PropertyAddress/MapServer/2"
					},
					"layout": [
						{
							"field": "address",
							"name": "Address",
							"width": "250px"
						},{
							"field": "principaladdresstype",
							"name": "Type",
							"width": "100px"
						}
					]
				}
			],
			"identifyParams": {
				"layerOption": "3"
			}
		},
		"lot": {
			"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
			"featureCountParams": {
				"type": "sixmaps.map.layers.FeatureCount",
				"params": {
					"counters": [
						{
							"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/6",
							"maxFeatureCount": 150
						},
						{
							"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
							"maxFeatureCount": 3
						}
					]
				}
			},
			"layerParams": [
				{
					"title": "Lot",
					"autoWidth": true,
					"layerName": "Lot",
					"layout": [
						{
							"field": "lotnumber",
							"name": "lot"
						},
						{
							"field": "sectionnumber",
							"name": "section"
						},
						{
							"field": "planlabel",
							"name": "plan"
						}
					]
				}
			],
			"identifyParams": {
				"layerOption": "6"
			}
		},
		"suburb": {
			"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
			"layerParams": [
				{
					"title": "Suburb",
					"autoWidth": true,
					"layerName": "Suburb",
					"layout": [
						{
							"field": "suburbname",
							"name": "Suburb",
							"width": "15em"
						},
						{
							"field": "postcode",
							"name": "Postcode"
						}
					]
				}
			],
			"identifyParams": {
				"maxAllowableOffset": 2,
				"layerOption": "0"
			}
		},
		"lga": {
			"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
			"layerParams": [
				{
					"title": "LGA",
					"autoWidth": true,
					"layerName": "LocalGovernmentArea",
					"layout": [
						{
							"field": "lganame",
							"name": "LGA Name",
							"width": "15em"
						}
					]
				}
			],
			"identifyParams": {
				"maxAllowableOffset": 20,
				"layerOption": "1"
			}
		},
		"Imagery": {
			"url": "${arcGISServerUrl}/Imagery/Best_By_Res_Date/ImageServer",
			"name": "Imagery/Best_By_Res_Date",
			"layerParams": [
				{
					"layerName": "Imagery/Best_By_Res_Date",
					"title": "Imagery",
					"layout": [
						{
							"field": "BlockName",
							"width": "10em"
						},
						{
							"field": "BlockType",
							"width": "10em"
						},
						{
							"field": "BlockStartDate",
							"width": "10em",
							"formatter": "${functionCatalog.shortDateFormatter}"
						},
						{
							"field": "BlockEndDate",
							"width": "10em",
							"formatter": "${functionCatalog.shortDateFormatter}"
						}
					]
				}
			]
		},
		"property": {
		      "url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
		      "layerParams": [
		          {
		              "title": "Property ID",
		              "autoWidth": true,
		              "layerName": "Property_M",
		              "layout": [
		                  {
		                      "field": "propid",
		                      "name": "Property ID",
		                      "width": "15em"
		                  }
		              ]
		          }
		      ],
		      "identifyParams": {
		          "layerOption": "22"
		      }
		},
		"parish": {
	          "url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
	          "ignoreExtraLayers": true,
	          "layerParams": [
	              {
	                  "title": "Parish & County",
	                  "autoWidth": true,
	                  "layerName": "Parish",
	                  "layout": [
	                      {
	                          "field": "parishname",
	                          "name": "Parish Name",
	                          "width": "150px"
	                      }, {
	                          "field": "countyname",
	                          "name": "County Name",
	                          "width": "150px"
	                      }
	                  ]
	              }
	          ],
	          "identifyParams": {
	              "maxAllowableOffset": 2,
	              "layerOption": "5"
	          }
		},
		"catchment": {
          "url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
          "layerParams": [
              {
                  "title": "CMA Boundaries",
                  "autoWidth": true,
                  "layerName": "Catchment",
                  "layout": [
                      {
                          "field": "cma_name",
                          "name": "Catchment",
                          "width": "20em"
                      }
                  ]
              }
          ],
          "identifyParams": {
              "maxAllowableOffset": 50,
              "layerOption": "7"
          }
      }
	},
	"searches": {
		"address": {
			"type": "sixmaps.dijits.takeMeTo.Address",
			"params": {
				"layerUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
				"addressQueryUrl": "${arcGISServerUrl}/sixmaps/PropertyAddress/MapServer/3",
				"resultsWidgetParams":{
					"queryUrl": "${arcGISServerUrl}/sixmaps/PropertyAddress/MapServer/2"
				}
			}
		},
		"psmaAddress": {
			"type": "sixmaps.dijits.takeMeTo.PSMAAddress",
			"params": {
				"layerUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0",
				"addressQueryUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/22"
			}
		},
		"lot": {
			"type": "sixmaps.dijits.takeMeTo.Lot",
			"params": {
				"layerUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/6"
			}
		},
		"suburb": {
			"type": "sixmaps.dijits.takeMeTo.Suburb",
			"params": {
				"layerUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/0"
			}
		},
		"lga": {
			"type": "sixmaps.dijits.takeMeTo.TakeMeTo",
			"params": {
				"title": "LGA",
				"queryParams":{
					"maxAllowableOffset": 100
				},
				"layerUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/1",
				"fieldParams": [
					{
						"name": "lganame",
						"alias": "LGA",
						"widgetType": "sixmaps.dijits.form.ComboBox",
						"exactCase": false,
						"ignoreCase": false,
						"searchType": "startsWith",
						"params": {
							"sourceUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/1",
							"style": "width:13em;",
							"fieldName": "lganame",
							"hasDownArrow": false
						}
					}
				],
				"resultsWidgetParams": {
					"selectFirstResult": true,
					"sortInfo": 1,
					"structure": [
						{
							"field": "lganame",
							"name": "LGA"
						}
					]
				}
			}
		},
		"poi": {
			"type": "sixmaps.dijits.takeMeTo.POI",
			"params": {
				"layerUrl": "${arcGISServerUrl}/sixmaps/POI/MapServer/0"
			}
		},
		"intersection": {
			"type": "sixmaps.dijits.takeMeTo.Intersection",
			"params": {
				"layerUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/6"
			}
		},
		"surveyMark": {
			"type": "sixmaps.dijits.takeMeTo.SurveyMark",
			"params": {
				"layerUrl": "${arcGISServerUrl}/sixmaps/SurveyMarksPublic/MapServer/0"
			}
		},
		"property": {
            "type": "sixmaps.dijits.takeMeTo.TakeMeTo",
            "params": {
                "title": "Property",
                "layerUrl": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer/22",
                "fieldParams": [
                    {
                        "name": "propid",
                        "alias": "Property ID",
                        "exactCase": true,
                        "ignoreCase": false
                    }
                ]
            }
        }
	},
	"defaultSearches":[
		{
			"link": "catalog.searches.address"
		}
	],
	"searchPane": {
		"type": "sixmaps.app.SearchPane",
		"paneParams": {
			"position": {
				"position": "absolute",
				"top": "100px",
				"left": "70px"
			}
		}
	},
	"basemaps": {
		"LPIMap": {
			"type": "esri.dijit.Basemap",
			"params": {
				"title": "NSW Map",
				"id": "NSWMap",
				"thumbnailUrl": "${apiUrl}sixmaps/app/images/thumbnails/NSWMap.png",
				"metadataUrl": "https://sdi.nsw.gov.au/catalog/search/viewMetadataDetails.page?uuid=%7B3EB9567A-21BA-4437-8A07-CF3F21956D5A%7D",
				"layers": [
					{
						"type": "sixmaps.dijits.BasemapLayer",
						"layerParams": {
							"url": "${arcGISServerUrl}/sixmaps/LPIMap/MapServer",
							"type": "esri.layers.ArcGISTiledMapServiceLayer",
							"params": {
								"tileServers": [
									"${tileServerUrl1}/arcgis/rest/services/sixmaps/LPIMap/MapServer",
									"${tileServerUrl2}/arcgis/rest/services/sixmaps/LPIMap/MapServer",
									"${tileServerUrl3}/arcgis/rest/services/sixmaps/LPIMap/MapServer",
									"${tileServerUrl4}/arcgis/rest/services/sixmaps/LPIMap/MapServer"
								]
							}
						}
					}
				]
			},
			"selected": false
		},
		"LPIImagery": {
			"type": "esri.dijit.Basemap",
			"params": {
				"title": "NSW Imagery",
				"id": "nswImagery",
				"thumbnailUrl": "${apiUrl}sixmaps/app/images/thumbnails/NSWImagery.jpg",
				"metadataUrl": "https://sdi.nsw.gov.au/catalog/search/viewMetadataDetails.page?uuid=%7BA90CE01A-6FD6-4B8E-BA43-5DD28025A2FD%7D",
				"layers": [
					{
						"type": "sixmaps.dijits.BasemapLayer",
						"layerParams": {
							"url": "${arcGISServerUrl}/sixmaps/LPI_Imagery_Best/MapServer",
							"type": "esri.layers.ArcGISTiledMapServiceLayer",
							"params": {
								"tileServers": [
									"${tileServerUrl1}/arcgis/rest/services/sixmaps/LPI_Imagery_Best/MapServer",
									"${tileServerUrl2}/arcgis/rest/services/sixmaps/LPI_Imagery_Best/MapServer",
									"${tileServerUrl3}/arcgis/rest/services/sixmaps/LPI_Imagery_Best/MapServer",
									"${tileServerUrl4}/arcgis/rest/services/sixmaps/LPI_Imagery_Best/MapServer"
								]
							}
						}
					}
				]
			},
			"selected": true
		},
		"NSWTopoMaps": {
			"type": "esri.dijit.Basemap",
			"params": {
				"title": "Topo Maps (Current)",
				"id": "LPITopoMap",
				"thumbnailUrl": "${apiUrl}sixmaps/app/images/thumbnails/topo.png",
				"layers": [
					{
						"type": "sixmaps.dijits.BasemapLayer",
						"layerParams": {
							"url": "${arcGISServerUrl}/sixmaps/LPITopoMap/MapServer",
							"type": "esri.layers.ArcGISTiledMapServiceLayer",
							"params": {
								"tileServers": [
									"${tileServerUrl1}/arcgis/rest/services/sixmaps/LPITopoMap/MapServer",
									"${tileServerUrl2}/arcgis/rest/services/sixmaps/LPITopoMap/MapServer",
									"${tileServerUrl3}/arcgis/rest/services/sixmaps/LPITopoMap/MapServer",
									"${tileServerUrl4}/arcgis/rest/services/sixmaps/LPITopoMap/MapServer"
								]
							}
						}
					}
				]
			},
			"selected": false
		},
		"NSWBaseMapGDA2020": {
			"type": "esri.dijit.Basemap",
			"params": {
				"title": "NSW Base Map GDA2020",
				"id": "NSWBaseMapGDA2020",
				"thumbnailUrl": "${apiUrl}sixmaps/app/images/thumbnails/1943.jpg",
				"metadataUrl": "https://sdi.nsw.gov.au/catalog/search/viewMetadataDetails.page?uuid=%7B85816660-36A9-4B1C-A6D5-10FCB196DCFE%7D",
				"layers": [
					{
						"type": "sixmaps.dijits.BasemapLayer",
						"layerParams": {
							"url": "https://portal.spatial.nsw.gov.au/tileservicesGDA2020/rest/services/public/NSW_Base_Map_GDA2020/MapServer",
							"type": "esri.layers.ArcGISTiledMapServiceLayer",
							"params": {
								"tileServers": [
									"https://portal.spatial.nsw.gov.au/tileservicesGDA2020/rest/services/public/NSW_Base_Map_GDA2020/MapServer"
								]
							}
						}
					}
				]
			},
			"selected": false
		},
		"NSWImageryGDA2020": {
			"type": "esri.dijit.Basemap",
			"params": {
				"title": "NSW Imagery GDA2020",
				"id": "NSWImageryGDA2020",
				"thumbnailUrl": "${apiUrl}sixmaps/app/images/thumbnails/1943.jpg",
				"metadataUrl": "https://sdi.nsw.gov.au/catalog/search/viewMetadataDetails.page?uuid=%7B85816660-36A9-4B1C-A6D5-10FCB196DCFE%7D",
				"layers": [
					{
						"type": "sixmaps.dijits.BasemapLayer",
						"layerParams": {
							"url": "https://portal.spatial.nsw.gov.au/tileservicesGDA2020/rest/services/public/NSW_Imagery_GDA2020/MapServer",
							"type": "esri.layers.ArcGISTiledMapServiceLayer",
							"params": {
								"tileServers": [
									"https://portal.spatial.nsw.gov.au/tileservicesGDA2020/rest/services/public/NSW_Imagery_GDA2020/MapServer"
								]
							}
						}
					}
				]
			},
			"selected": false
		},
		"1943Imagery": {
			"type": "esri.dijit.Basemap",
			"params": {
				"title": "Sydney 1943 Imagery",
				"id": "1943",
				"thumbnailUrl": "${apiUrl}sixmaps/app/images/thumbnails/1943.jpg",
				"metadataUrl": "https://sdi.nsw.gov.au/catalog/search/viewMetadataDetails.page?uuid=%7B85816660-36A9-4B1C-A6D5-10FCB196DCFE%7D",
				"layers": [
					{
						"type": "sixmaps.dijits.BasemapLayer",
						"layerParams": {
							"url": "${arcGISServerUrl}/sixmaps/sydney1943/MapServer",
							"type": "esri.layers.ArcGISTiledMapServiceLayer",
							"params": {
								"tileServers": [
									"${tileServerUrl1}/arcgis/rest/services/sixmaps/sydney1943/MapServer",
									"${tileServerUrl2}/arcgis/rest/services/sixmaps/sydney1943/MapServer",
									"${tileServerUrl3}/arcgis/rest/services/sixmaps/sydney1943/MapServer",
									"${tileServerUrl4}/arcgis/rest/services/sixmaps/sydney1943/MapServer"
								]
							}
						}
					}
				]
			},
			"selected": false
		},
		"WhiteBackground": {
			"type": "esri.dijit.Basemap",
			"params": {
				"title": "White Background",
				"id": "WhiteBackground",
				"thumbnailUrl": "${apiUrl}sixmaps/app/images/thumbnails/whiteBasemap.png",
				"layers": [
					{
						"type": "sixmaps.dijits.BasemapLayer",
						"layerParams": {
							"url": "${arcGISServerUrl}/sixmaps/Boundaries/MapServer",
							"type": "esri.layers.ArcGISDynamicMapServiceLayer",
							"params": {
								"listLayers": true,
								"imageTransparency": true,
								"imageParameters":{
									"format": "png32"
								},
								"listLayers": false
							},
							"visibleLayers": [
			                  	-1
							],
							"includeLayerIDs": [
			                    -1
							]
						}
					}
				]
			},
			"selected": false
		},
		"OpenStreetMap": {
			"type": "esri.dijit.Basemap",
			"params": {
				"title": "OpenStreetMap",
				"id": "osm",
				"thumbnailUrl": "${apiUrl}sixmaps/app/images/thumbnails/OSMThumb.png",
				"layers": [
					{
						"type": "sixmaps.dijits.BasemapLayer",
						"layerParams": {
							"serviceInfoResponse": {
								"documentInfo": {
									"Comments": "OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.",
									"Credits": "Copyright OpenStreetMap contributors, CC BY-SA."
								},
								"url": "//www.openstreetmap.org/"
							},
							"type": "esri.layers.OpenStreetMapLayer"
						}
					}
				]
			},
			"selected": false
		}
	},
	"printTemplates": {
		"landscapeLegend": {
			"title": "Landscape with Legend",
			"fieldParams": [
				{
					"name": "title",
					"alias": "Title"
				},
				{
					"name": "subtitle",
					"alias": "Subtitle"
				},
				{
					"name": "legend",
					"alias": "Legend"
				}
			],
			"pdfParams": {
				"orientation": "LANDSCAPE",
				"pageWidth": 1200
			},
			"width": 1200,
			"height": 800,
			"templateUrl": "${apiUrl}/sixmaps/map/PrintTemplates/LandscapeLegend.html"
		},
		"portrait": {
			"title": "Portrait",
			"fieldParams": [
				{
					"name": "title",
					"alias": "Title"
				},
				{
					"name": "subtitle",
					"alias": "Subtitle"
				}
			],
			"pdfParams": {
				"orientation": "PORTRAIT",
				"pageWidth": 800
			},
			"width": 800,
			"height": 1100,
			"templateUrl": "${apiUrl}/sixmaps/map/PrintTemplates/Portrait.html"
		},
		"landscape": {
			"title": "Landscape",
			"fieldParams": [
				{
					"name": "title",
					"alias": "Title"
				},
				{
					"name": "subtitle",
					"alias": "Subtitle"
				}
			],
			"pdfParams": {
				"orientation": "LANDSCAPE",
				"pageWidth": 1200
			},
			"width": 1200,
			"height": 800,
			"templateUrl": "${apiUrl}/sixmaps/map/PrintTemplates/Landscape.html"
		}
	},
	"baseMapMenus": {
		"imageryMapSlider": {
			"type": "sixmaps.dijits.BasemapMenu",
			"basemaps": [
				{
					"link": "catalog.basemaps.LPIMap"
				},
				{
					"link": "catalog.basemaps.LPIImagery"
				},
				{
					"link": "catalog.basemaps.WhiteBackground"
				},
				{
					"link": "catalog.basemaps.1943Imagery"
				},
				{
					"link": "catalog.basemaps.NSWTopoMaps"
				}
			],
			"params": {
				"activeBasemaps": {
					"foreground": "nswImagery",
					"background": "NSWMap"
				}
			}
		}
	}
}
