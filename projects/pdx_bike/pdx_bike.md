---
layout: default
title: Portland bike Desire Paths
---

# Portland Bike Desire Paths

**Introduction/Lit Review**

**Methodology**

**Results**

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="./resources/ol.css">
        <link rel="stylesheet" href="resources/fontawesome-all.min.css">
        <link href="resources/photon-geocoder-autocomplete.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./resources/ol-layerswitcher.css">
        <link rel="stylesheet" href="./resources/qgis2web.css">
        <style>
        html, body {
            background-color: #ffffff;
        }
        .ol-control > * {
            background-color: #f8f8f8!important;
            color: #444444!important;
            border-radius: 0px;
        }
        .ol-attribution a, .gcd-gl-input::placeholder, .search-layer-input-search::placeholder {
            color: #444444!important;
        }
        .search-layer-input-search {
            background-color: #f8f8f8!important;
        }
        .ol-control > *:focus, .ol-control >*:hover {
            background-color: rgba(248, 248, 248, 0.7)!important;
        }
        .ol-control {
            background-color: rgba(255,255,255,.4) !important;
            padding: 2px !important;
        }
        </style>

        <style>
        #map {
            width: 811px;
            height: 625px;
        }
        </style>
        <title></title>
    </head>
    <body>
        <div id="map">
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </div>
        <script src="resources/qgis2web_expressions.js"></script>
        <script src="./resources/functions.js"></script>
        <script src="./resources/ol.js"></script>
        <script src="./resources/ol-layerswitcher.js"></script>
        <script src="resources/photon-geocoder-autocomplete.min.js"></script>
        <script src="resources/olms.js"></script>
        <script src="layers/BikeShareServiceArea_1.js"></script><script src="layers/BikeMapRecommendedRoutes_2.js"></script><script src="layers/BiketownSegments_3.js"></script><script src="layers/Difference_4.js"></script>
        <script src="styles/BikeShareServiceArea_1_style.js"></script><script src="styles/BikeMapRecommendedRoutes_2_style.js"></script><script src="styles/BiketownSegments_3_style.js"></script><script src="styles/Difference_4_style.js"></script>
        <script src="./layers/layers.js" type="text/javascript"></script>
        <script src="./resources/Autolinker.min.js"></script>
        <script src="./resources/qgis2web.js"></script>
    </body>
</html>


**Data Sources**

- [Biketown Service Area Boundary](https://gis-pdx.opendata.arcgis.com/datasets/d4edce3b82d441ff8f621d07a21eb11f_1301/explore?location=45.535874%2C-122.566732%2C12)
- [Portland Recommended Bicycle Routes](https://atlasdata.dartmouth.edu/downloads/supplemental#boundaries)
- [Biketown Ridership Data - Downloaded for Q1 2026](https://public.ridereport.com/pdx?x=-122.6411937&y=45.5228353&z=11.23&vehicle=e-bike)
- [Oregon Census Block Groups 2020](https://geohub.oregon.gov/search?q=block%20groups)

[back](../)
