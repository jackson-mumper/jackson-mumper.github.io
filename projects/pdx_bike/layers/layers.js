var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,


            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BikeShareServiceArea_1 = new ol.format.GeoJSON();
var features_BikeShareServiceArea_1 = format_BikeShareServiceArea_1.readFeatures(json_BikeShareServiceArea_1,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeShareServiceArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeShareServiceArea_1.addFeatures(features_BikeShareServiceArea_1);
var lyr_BikeShareServiceArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeShareServiceArea_1,
                style: style_BikeShareServiceArea_1,
                popuplayertitle: 'Bike Share Service Area',
                interactive: false,
                title: '<img src="styles/legend/BikeShareServiceArea_1.png" /> Bike Share Service Area'
            });
var format_BikeMapRecommendedRoutes_2 = new ol.format.GeoJSON();
var features_BikeMapRecommendedRoutes_2 = format_BikeMapRecommendedRoutes_2.readFeatures(json_BikeMapRecommendedRoutes_2,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeMapRecommendedRoutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeMapRecommendedRoutes_2.addFeatures(features_BikeMapRecommendedRoutes_2);
var lyr_BikeMapRecommendedRoutes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeMapRecommendedRoutes_2,
                style: style_BikeMapRecommendedRoutes_2,
                popuplayertitle: 'Bike Map Recommended Routes',
                interactive: false,
                title: '<img src="styles/legend/BikeMapRecommendedRoutes_2.png" /> Bike Map Recommended Routes'
            });
var format_BiketownSegments_3 = new ol.format.GeoJSON();
var features_BiketownSegments_3 = format_BiketownSegments_3.readFeatures(json_BiketownSegments_3,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiketownSegments_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiketownSegments_3.addFeatures(features_BiketownSegments_3);
var lyr_BiketownSegments_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BiketownSegments_3,
                style: style_BiketownSegments_3,
                popuplayertitle: 'Biketown Segments',
                interactive: true,
    title: 'Biketown Segment Ridership<br />\
    Low <img src="styles/legend/BiketownSegments_3_0.png" /> <img src="styles/legend/BiketownSegments_3_4.png" /> <img src="styles/legend/BiketownSegments_3_8.png" /> <img src="styles/legend/BiketownSegments_3_12.png" /> <img src="styles/legend/BiketownSegments_3_16.png" /> <img src="styles/legend/BiketownSegments_3_20.png" /> <img src="styles/legend/BiketownSegments_3_24.png" /> High <br />' });
var format_Difference_4 = new ol.format.GeoJSON();
var features_Difference_4 = format_Difference_4.readFeatures(json_Difference_4,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Difference_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Difference_4.addFeatures(features_Difference_4);
var lyr_Difference_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Difference_4,
                style: style_Difference_4,
                popuplayertitle: 'Difference',
                interactive: false,
                title: ''
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BikeShareServiceArea_1.setVisible(true);lyr_BikeMapRecommendedRoutes_2.setVisible(true);lyr_BiketownSegments_3.setVisible(true);lyr_Difference_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BikeShareServiceArea_1,lyr_BikeMapRecommendedRoutes_2,lyr_BiketownSegments_3,lyr_Difference_4];
lyr_BikeShareServiceArea_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ServiceAre': 'ServiceAre', 'Comments': 'Comments', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BikeMapRecommendedRoutes_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TranPlanID': 'TranPlanID', 'Connection': 'Connection', 'StreetName': 'StreetName', 'FromStreet': 'FromStreet', 'ToStreet': 'ToStreet', 'Shape_Leng': 'Shape_Leng', });
lyr_BiketownSegments_3.set('fieldAliases', {'name': 'name', 'count': 'count', 'len': 'len', 'veh_ms': 'veh_ms', 'GEOID': 'GEOID', 'geoid_nam': 'geoid_nam', 'OBJECTID_1': 'OBJECTID_1', 'StreetName': 'StreetName', 'Recommend': 'Recommend', 'Vehicle Km': 'Vehicle Km', });
lyr_Difference_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ServiceAre': 'ServiceAre', 'Comments': 'Comments', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BikeShareServiceArea_1.set('fieldImages', {'OBJECTID': 'Range', 'ServiceAre': 'TextEdit', 'Comments': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BikeMapRecommendedRoutes_2.set('fieldImages', {'OBJECTID': 'Range', 'TranPlanID': 'TextEdit', 'Connection': 'TextEdit', 'StreetName': 'TextEdit', 'FromStreet': 'TextEdit', 'ToStreet': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_BiketownSegments_3.set('fieldImages', {'name': 'TextEdit', 'count': 'TextEdit', 'len': 'TextEdit', 'veh_ms': 'TextEdit', 'GEOID': 'TextEdit', 'geoid_nam': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'StreetName': '', 'Recommend': '', 'Vehicle Km': '', });
lyr_Difference_4.set('fieldImages', {'OBJECTID': 'Range', 'ServiceAre': 'TextEdit', 'Comments': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BikeShareServiceArea_1.set('fieldLabels', {'OBJECTID': 'no label', 'ServiceAre': 'no label', 'Comments': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BikeMapRecommendedRoutes_2.set('fieldLabels', {'OBJECTID': 'no label', 'TranPlanID': 'no label', 'Connection': 'no label', 'StreetName': 'no label', 'FromStreet': 'no label', 'ToStreet': 'no label', 'Shape_Leng': 'no label', });
lyr_BiketownSegments_3.set('fieldLabels', {'name': 'hidden field', 'count': 'hidden field', 'len': 'hidden field', 'veh_ms': 'hidden field', 'GEOID': 'hidden field', 'geoid_nam': 'hidden field', 'OBJECTID_1': 'hidden field', 'StreetName': 'inline label - always visible', 'Recommend': 'inline label - always visible', 'Vehicle Km': 'inline label - always visible', });
lyr_Difference_4.set('fieldLabels', {'OBJECTID': 'no label', 'ServiceAre': 'no label', 'Comments': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Difference_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
