---
layout: default
title: Portland bike Desire Paths
---

# Portland Bike Desire Paths

**Introduction/Lit Review**

**Methodology**

1.	Download Q1 2026 rider data from Biketown and the Portland BikeMap shapefile (links to Data Sources at the bottom).
2.	Clean the Biketown route data, removing segments with fewer than 100 passengers or no name (nameless segments were mostly highway entrance/exit ramps, park trails, or very short). I made exceptions for the Steel and Burnside Bridges which were originally nameless in the data.
3.	Create an 18m buffer around the BikeMap recommended routes and dissolve them into a single polygon. Because the BikeMap and Biketown data come from different sources, the line shapes don’t line up accurately. This small buffer makes it easier to identify find overlaps between the BikeMap and Biketown data.
4.	For each segment in the Biketown data, calculate the length of the segment in meters and multiply it by the vehicle count for that segment to determine its total vehicle-meters travelled.
5.	Download Portland census block group shapefiles and translate them 10m north and 10m west. It is necessary to translate the block groups slightly to ensure most of the Biketown segments fall cleanly withing a single block group. Because the block group boundaries are on the roadways (many of the Biketown segments are on roadways that are block group boundaries)
6.	Use the Join Attributes by Location tool to add the GEOID field to the Biketown segment shapefile, using a one-to-one join with the largest overlap.
7.	Create a new variable in the Biketown segments that is unique for each street name and GEOID combination. Aggregate the Biketown segments based on this column, adding together the vehicle-meters traveled for each segment into the aggregated segments.
8.	Use the Join Attributes by Location tool again, this time using the buffered BikeMap layer as the overlay, and again with a one-to-one join using the greatest overlap. This categorizes Biketown-Block Group segments as within the BikeMap network or outside the network, and ensures segments that interest the BikeMap network but are not themselves BikeMap routes are excluded.

**Findings**

The heaviest used corridors were downtown and across the six bridges between East and West Portland. This makes sense, given that downtown has the highest transit, population, and Biketown station density in the city, and the bridges serve as vital connectors between where Portlanders live and work. However, this area has  similarly high density of bike paths, greenways, and other recommended routes.

Below is a list of the ten Biketown segments with the highest number of Q1 vehicle-kilometers traveled that are *not* covered by the Portland Bike Map.

1. SE Division Place from 4th to 9th (20,665 bike-kms)
2. NE 7th Ave from Fremont to Prescott (15,038 bike-kms)
3. SE Division St from 10th to 26th (14,293 bike-kms)
4. SE Caruthers St from 4th to 12th (14,069 bike-kms)
5. NW 12th Ave from Burnside to Lovejoy (13,919 bike-kms)
6. SW 10th Ave from Salmon to Burnside (12,891 bike-kms)
7. SE Taylor St from Water to 12th (10,926 bike-kms)
8. NE 7th Ave from Knott to Monroe (10,834 bike-kms)
9. SW 12th Ave from Jefferson to Burnside (10,543 bike-kms)
10. NW 21st Ave from Hoyt to Marshall (10,321 bike-kms)

Several road names appeal multiple times in this list, indicating that the desire paths for bike infrastructure might be longer than the census block boundaries used in this analysis. Three large groups emerge in particular, along SE Division, NE 7th, and NW/SW 12th.

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
            width: 608px;
            height: 469px;
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
