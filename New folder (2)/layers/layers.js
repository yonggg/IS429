var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_DistributionofHouseholds = new ol.format.GeoJSON();
var features_DistributionofHouseholds = format_DistributionofHouseholds.readFeatures(geojson_DistributionofHouseholds, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistributionofHouseholds = new ol.source.Vector();
jsonSource_DistributionofHouseholds.addFeatures(features_DistributionofHouseholds);var lyr_DistributionofHouseholds = new ol.layer.Vector({
                source:jsonSource_DistributionofHouseholds, 
                style: style_DistributionofHouseholds,
                title: "Distribution of Households"
            });var format_Buildings = new ol.format.GeoJSON();
var features_Buildings = format_Buildings.readFeatures(geojson_Buildings, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings = new ol.source.Vector();
jsonSource_Buildings.addFeatures(features_Buildings);var lyr_Buildings = new ol.layer.Vector({
                source:jsonSource_Buildings, 
                style: style_Buildings,
                title: "Buildings"
            });var format_500mBufferCashForTrashStations = new ol.format.GeoJSON();
var features_500mBufferCashForTrashStations = format_500mBufferCashForTrashStations.readFeatures(geojson_500mBufferCashForTrashStations, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500mBufferCashForTrashStations = new ol.source.Vector();
jsonSource_500mBufferCashForTrashStations.addFeatures(features_500mBufferCashForTrashStations);var lyr_500mBufferCashForTrashStations = new ol.layer.Vector({
                source:jsonSource_500mBufferCashForTrashStations, 
                style: style_500mBufferCashForTrashStations,
                title: "500m Buffer Cash For Trash Stations "
            });var format_CashForTrashStations = new ol.format.GeoJSON();
var features_CashForTrashStations = format_CashForTrashStations.readFeatures(geojson_CashForTrashStations, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CashForTrashStations = new ol.source.Vector();
jsonSource_CashForTrashStations.addFeatures(features_CashForTrashStations);var lyr_CashForTrashStations = new ol.layer.Vector({
                source:jsonSource_CashForTrashStations, 
                style: style_CashForTrashStations,
                title: "Cash For Trash Stations"
            });

lyr_DistributionofHouseholds.setVisible(true);lyr_Buildings.setVisible(true);lyr_500mBufferCashForTrashStations.setVisible(true);lyr_CashForTrashStations.setVisible(true);
var layersList = [baseLayer,lyr_DistributionofHouseholds,lyr_Buildings,lyr_500mBufferCashForTrashStations,lyr_CashForTrashStations];
lyr_DistributionofHouseholds.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Age65+': 'Age65+', 'AgeGroup2015_ZONE_N': 'AgeGroup2015_ZONE_N', 'AgeGroup2015_ZONE_C': 'AgeGroup2015_ZONE_C', 'AgeGroup2015_SUBZONE_N': 'AgeGroup2015_SUBZONE_N', 'AgeGroup2015_ALL_AGE': 'AgeGroup2015_ALL_AGE', 'AgeGroup2015_AGE0-4': 'AgeGroup2015_AGE0-4', 'AgeGroup2015_AGE5-9': 'AgeGroup2015_AGE5-9', 'AgeGroup2015_AGE10-14': 'AgeGroup2015_AGE10-14', 'AgeGroup2015_AGE15-19': 'AgeGroup2015_AGE15-19', 'AgeGroup2015_AGE20-24': 'AgeGroup2015_AGE20-24', 'AgeGroup2015_AGE25-29': 'AgeGroup2015_AGE25-29', 'AgeGroup2015_AGE30-34': 'AgeGroup2015_AGE30-34', 'AgeGroup2015_AGE35-39': 'AgeGroup2015_AGE35-39', 'AgeGroup2015_AGE40-44': 'AgeGroup2015_AGE40-44', 'AgeGroup2015_AGE45-49': 'AgeGroup2015_AGE45-49', 'AgeGroup2015_AGE50-54': 'AgeGroup2015_AGE50-54', 'AgeGroup2015_AGE55-59': 'AgeGroup2015_AGE55-59', 'AgeGroup2015_AGE60-64': 'AgeGroup2015_AGE60-64', 'AgeGroup2015_AGE65-69': 'AgeGroup2015_AGE65-69', 'AgeGroup2015_AGE70-74': 'AgeGroup2015_AGE70-74', 'AgeGroup2015_AGE75-79': 'AgeGroup2015_AGE75-79', 'AgeGroup2015_AGE80-84': 'AgeGroup2015_AGE80-84', 'AgeGroup2015_AGE85': 'AgeGroup2015_AGE85', });
lyr_Buildings.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_500mBufferCashForTrashStations.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LANDYADDRE': 'LANDYADDRE', 'LANDXADDRE': 'LANDXADDRE', 'PHOTOURL': 'PHOTOURL', 'HYPERLINK': 'HYPERLINK', 'DESCRIPTIO': 'DESCRIPTIO', 'ADDRESSUNI': 'ADDRESSUNI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSBLO': 'ADDRESSBLO', 'NAME': 'NAME', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_CashForTrashStations.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LANDYADDRE': 'LANDYADDRE', 'LANDXADDRE': 'LANDXADDRE', 'PHOTOURL': 'PHOTOURL', 'HYPERLINK': 'HYPERLINK', 'DESCRIPTIO': 'DESCRIPTIO', 'ADDRESSUNI': 'ADDRESSUNI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSBLO': 'ADDRESSBLO', 'NAME': 'NAME', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_DistributionofHouseholds.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Age65+': 'TextEdit', 'AgeGroup2015_ZONE_N': 'TextEdit', 'AgeGroup2015_ZONE_C': 'TextEdit', 'AgeGroup2015_SUBZONE_N': 'TextEdit', 'AgeGroup2015_ALL_AGE': 'TextEdit', 'AgeGroup2015_AGE0-4': 'TextEdit', 'AgeGroup2015_AGE5-9': 'TextEdit', 'AgeGroup2015_AGE10-14': 'TextEdit', 'AgeGroup2015_AGE15-19': 'TextEdit', 'AgeGroup2015_AGE20-24': 'TextEdit', 'AgeGroup2015_AGE25-29': 'TextEdit', 'AgeGroup2015_AGE30-34': 'TextEdit', 'AgeGroup2015_AGE35-39': 'TextEdit', 'AgeGroup2015_AGE40-44': 'TextEdit', 'AgeGroup2015_AGE45-49': 'TextEdit', 'AgeGroup2015_AGE50-54': 'TextEdit', 'AgeGroup2015_AGE55-59': 'TextEdit', 'AgeGroup2015_AGE60-64': 'TextEdit', 'AgeGroup2015_AGE65-69': 'TextEdit', 'AgeGroup2015_AGE70-74': 'TextEdit', 'AgeGroup2015_AGE75-79': 'TextEdit', 'AgeGroup2015_AGE80-84': 'TextEdit', 'AgeGroup2015_AGE85': 'TextEdit', });
lyr_Buildings.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_500mBufferCashForTrashStations.set('fieldImages', {'OBJECTID': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'PHOTOURL': 'TextEdit', 'HYPERLINK': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'NAME': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_CashForTrashStations.set('fieldImages', {'OBJECTID': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'PHOTOURL': 'TextEdit', 'HYPERLINK': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'NAME': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_DistributionofHouseholds.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Age65+': 'no label', 'AgeGroup2015_ZONE_N': 'no label', 'AgeGroup2015_ZONE_C': 'no label', 'AgeGroup2015_SUBZONE_N': 'no label', 'AgeGroup2015_ALL_AGE': 'no label', 'AgeGroup2015_AGE0-4': 'no label', 'AgeGroup2015_AGE5-9': 'no label', 'AgeGroup2015_AGE10-14': 'no label', 'AgeGroup2015_AGE15-19': 'no label', 'AgeGroup2015_AGE20-24': 'no label', 'AgeGroup2015_AGE25-29': 'no label', 'AgeGroup2015_AGE30-34': 'no label', 'AgeGroup2015_AGE35-39': 'no label', 'AgeGroup2015_AGE40-44': 'no label', 'AgeGroup2015_AGE45-49': 'no label', 'AgeGroup2015_AGE50-54': 'no label', 'AgeGroup2015_AGE55-59': 'no label', 'AgeGroup2015_AGE60-64': 'no label', 'AgeGroup2015_AGE65-69': 'no label', 'AgeGroup2015_AGE70-74': 'no label', 'AgeGroup2015_AGE75-79': 'no label', 'AgeGroup2015_AGE80-84': 'no label', 'AgeGroup2015_AGE85': 'no label', });
lyr_Buildings.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_500mBufferCashForTrashStations.set('fieldLabels', {'OBJECTID': 'no label', 'LANDYADDRE': 'no label', 'LANDXADDRE': 'no label', 'PHOTOURL': 'no label', 'HYPERLINK': 'no label', 'DESCRIPTIO': 'no label', 'ADDRESSUNI': 'no label', 'ADDRESSSTR': 'no label', 'ADDRESSPOS': 'no label', 'ADDRESSFLO': 'no label', 'ADDRESSBUI': 'no label', 'ADDRESSBLO': 'no label', 'NAME': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', });
lyr_CashForTrashStations.set('fieldLabels', {'OBJECTID': 'no label', 'LANDYADDRE': 'no label', 'LANDXADDRE': 'no label', 'PHOTOURL': 'no label', 'HYPERLINK': 'no label', 'DESCRIPTIO': 'no label', 'ADDRESSUNI': 'no label', 'ADDRESSSTR': 'no label', 'ADDRESSPOS': 'no label', 'ADDRESSFLO': 'no label', 'ADDRESSBUI': 'no label', 'ADDRESSBLO': 'no label', 'NAME': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', });
lyr_CashForTrashStations.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});