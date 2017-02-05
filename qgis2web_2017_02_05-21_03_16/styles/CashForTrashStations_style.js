var size = 0;

var styleCache_CashForTrashStations={}
var style_CashForTrashStations = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0327586206897,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity_recycling.svg"
            })
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_CashForTrashStations[key]){
        var text = new ol.style.Text({
              font: '9.75px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_CashForTrashStations[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_CashForTrashStations[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};