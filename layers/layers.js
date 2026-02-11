var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Orthomosaic_2 = new ol.layer.Tile({
            'title': 'Orthomosaic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://hicsuntdracone.github.io/Priladozhskii/XYZTiles/Orthomosaic/{z}/{x}/{y}.png'
            })
        });

        var lyr_DTM_3 = new ol.layer.Tile({
            'title': 'DTM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://hicsuntdracone.github.io/Priladozhskii/XYZTiles/DTM/{z}/{x}/{y}.png'
            })
        });
var format_Boundaries_4 = new ol.format.GeoJSON();
var features_Boundaries_4 = format_Boundaries_4.readFeatures(json_Boundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundaries_4.addFeatures(features_Boundaries_4);
var lyr_Boundaries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundaries_4, 
                style: style_Boundaries_4,
                popuplayertitle: 'Boundaries',
                interactive: false,
                title: '<img src="styles/legend/Boundaries_4.png" /> Boundaries'
            });
var format_Contour_5 = new ol.format.GeoJSON();
var features_Contour_5 = format_Contour_5.readFeatures(json_Contour_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour_5.addFeatures(features_Contour_5);
var lyr_Contour_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contour_5, 
                style: style_Contour_5,
                popuplayertitle: 'Contour',
                interactive: false,
    title: 'Contour<br />\
    <img src="styles/legend/Contour_5_0.png" /> 1<br />\
    <img src="styles/legend/Contour_5_1.png" /> <br />' });
var format_LandCover_6 = new ol.format.GeoJSON();
var features_LandCover_6 = format_LandCover_6.readFeatures(json_LandCover_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandCover_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandCover_6.addFeatures(features_LandCover_6);
var lyr_LandCover_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandCover_6, 
                style: style_LandCover_6,
                popuplayertitle: 'Land Cover',
                interactive: true,
    title: 'Land Cover<br />\
    <img src="styles/legend/LandCover_6_0.png" /> Grass<br />\
    <img src="styles/legend/LandCover_6_1.png" /> High Vegetation<br />\
    <img src="styles/legend/LandCover_6_2.png" /> Shrub<br />\
    <img src="styles/legend/LandCover_6_3.png" /> Bare Ground<br />\
    <img src="styles/legend/LandCover_6_4.png" /> Yard<br />' });
var format_Building_7 = new ol.format.GeoJSON();
var features_Building_7 = format_Building_7.readFeatures(json_Building_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_7.addFeatures(features_Building_7);
var lyr_Building_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_7, 
                style: style_Building_7,
                popuplayertitle: 'Building',
                interactive: true,
                title: '<img src="styles/legend/Building_7.png" /> Building'
            });
var format_TransportationPolygon_8 = new ol.format.GeoJSON();
var features_TransportationPolygon_8 = format_TransportationPolygon_8.readFeatures(json_TransportationPolygon_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportationPolygon_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportationPolygon_8.addFeatures(features_TransportationPolygon_8);
var lyr_TransportationPolygon_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportationPolygon_8, 
                style: style_TransportationPolygon_8,
                popuplayertitle: 'Transportation Polygon',
                interactive: true,
    title: 'Transportation Polygon<br />\
    <img src="styles/legend/TransportationPolygon_8_0.png" /> Airways<br />\
    <img src="styles/legend/TransportationPolygon_8_1.png" /> Road<br />' });
var format_Transportation_9 = new ol.format.GeoJSON();
var features_Transportation_9 = format_Transportation_9.readFeatures(json_Transportation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportation_9.addFeatures(features_Transportation_9);
var lyr_Transportation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transportation_9, 
                style: style_Transportation_9,
                popuplayertitle: 'Transportation',
                interactive: true,
    title: 'Transportation<br />\
    <img src="styles/legend/Transportation_9_0.png" /> Airways<br />\
    <img src="styles/legend/Transportation_9_1.png" /> Road<br />' });
var group_Utility = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Utility'});

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_Orthomosaic_2.setVisible(false);lyr_DTM_3.setVisible(false);lyr_Boundaries_4.setVisible(true);lyr_Contour_5.setVisible(true);lyr_LandCover_6.setVisible(true);lyr_Building_7.setVisible(true);lyr_TransportationPolygon_8.setVisible(true);lyr_Transportation_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_Orthomosaic_2,lyr_DTM_3,lyr_Boundaries_4,lyr_Contour_5,lyr_LandCover_6,lyr_Building_7,lyr_TransportationPolygon_8,lyr_Transportation_9];
lyr_Boundaries_4.set('fieldAliases', {'Area': 'Area', });
lyr_Contour_5.set('fieldAliases', {'FID': 'FID', 'ELEVATION': 'ELEVATION', 'LAYER': 'LAYER', 'NAME': 'NAME', 'Length': 'Length', 'Index': 'Index', });
lyr_LandCover_6.set('fieldAliases', {'Type': 'Type', 'Area': 'Area', });
lyr_Building_7.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Area': 'Area', });
lyr_TransportationPolygon_8.set('fieldAliases', {'Type': 'Type', 'Length': 'Length', 'Area': 'Area', });
lyr_Transportation_9.set('fieldAliases', {'Length': 'Length', 'Type': 'Type', });
lyr_Boundaries_4.set('fieldImages', {'Area': 'TextEdit', });
lyr_Contour_5.set('fieldImages', {'FID': 'TextEdit', 'ELEVATION': 'TextEdit', 'LAYER': 'TextEdit', 'NAME': 'TextEdit', 'Length': 'TextEdit', 'Index': 'Range', });
lyr_LandCover_6.set('fieldImages', {'Type': 'TextEdit', 'Area': 'TextEdit', });
lyr_Building_7.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Area': 'TextEdit', });
lyr_TransportationPolygon_8.set('fieldImages', {'Type': 'TextEdit', 'Length': 'TextEdit', 'Area': 'TextEdit', });
lyr_Transportation_9.set('fieldImages', {'Length': 'TextEdit', 'Type': 'TextEdit', });
lyr_Boundaries_4.set('fieldLabels', {'Area': 'no label', });
lyr_Contour_5.set('fieldLabels', {'FID': 'hidden field', 'ELEVATION': 'no label', 'LAYER': 'no label', 'NAME': 'no label', 'Length': 'no label', 'Index': 'no label', });
lyr_LandCover_6.set('fieldLabels', {'Type': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Building_7.set('fieldLabels', {'id': 'hidden field', 'Type': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_TransportationPolygon_8.set('fieldLabels', {'Type': 'inline label - always visible', 'Length': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Transportation_9.set('fieldLabels', {'Length': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_Transportation_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});