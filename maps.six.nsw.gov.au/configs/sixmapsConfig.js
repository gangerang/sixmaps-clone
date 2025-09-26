{
    "extent": {
        "link": "catalog.extent"
    },
    "slider": {
        "link": "catalog.slider"
    },
    "operationalLayers": [
        {
            "link": "catalog.operationalLayers.lotLabels"
        },
        {
            "link": "catalog.operationalLayers.surveyMarks"
        },
        {
            "link": "catalog.operationalLayers.dynamicLabels"
        },
        {
            "link": "catalog.operationalLayers.lotBoundaries"
        },
        {
            "link": "catalog.operationalLayers.floodFootprint"
        },
        {
            "link": "catalog.operationalLayers.floodImagery"
        },
        {
            "link": "catalog.operationalLayers.floodImageryCIR"
        }
    ],
    "tools": [
        {
            "link": "catalog.tools.fullExtent"
        },
        {
            "link": "catalog.tools.prevExtent"
        },
        {
            "link": "catalog.tools.nextExtent"
        },
        {
            "link": "catalog.tools.measureArea"
        },
        {
            "link": "catalog.tools.measureDistance"
        },
        {
            "link": "catalog.tools.coordinate"
        },
        {
            "link": "catalog.tools.identify"
        },
        {
            "link": "catalog.tools.printPDF"
        },
        {
            "link": "catalog.tools.csvDropper"
        },
        {
            "link": "catalog.tools.imageDropper"
        }
    ],
    "splash": {
        "link": "catalog.splash"
    },
    "searches": [
        {
            "link": "catalog.searches.address",
            "searchOrder": 2
        },
        {
            "link": "catalog.searches.lot",
            "searchOrder": 1
        },
        {
            "link": "catalog.searches.suburb"
        },
        {
            "link": "catalog.searches.poi",
            "searchOrder": 4
        },
        {
            "link": "catalog.searches.surveyMark",
            "searchOrder": 3
        }
    ],
    "searchPane": {
        "link": "catalog.searchPane"
    },
    "widgets": [
        {
            "type": "sixmaps.dijits.DropMapLayers",
            "params": {
                "node": "map"
            }
        }
    ],
    "basemapMenu": {
        "link": "catalog.baseMapMenus.imageryMapSlider",
        "params": {
            "activeBasemaps": {
                "foreground": "nswImagery",
                "background": "NSWMap"
            }
        }
    },
    "requires": [
        "sixmaps.dijits.ImageViewer"
    ]
}