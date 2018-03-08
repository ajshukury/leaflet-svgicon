L.DivIcon.SVGIcon.CircleIcon = L.DivIcon.SVGIcon.extend({
    initialize: function(options) {
        options = L.Util.setOptions(this, options)
        options.circleAnchor = L.point(Number(options.iconSize.x)/2, Number(options.iconSize.y)/2)
        L.DivIcon.SVGIcon.prototype.initialize.call(this, options)

        return options
    },
    _createPathDescription: function() {
        var height = Number(this.options.iconSize.y)
        var width = Number(this.options.iconSize.x)
        var weight = Number(this.options.weight)
        var margin = weight 

        var startPoint = "M " + margin + " " + (height/2) + " "
        var bottomLeftLine = "L " + (width/2) + " " + (height - margin) + " "
        var bottomRightLine = "L " + (width - margin) + " " + (height/2) + " "
        var topLeftLine = "L " + (width/2) + " " + margin + " Z"

        var d = startPoint + bottomLeftLine + bottomRightLine + topLeftLine

        return "";
    }
})

L.divIcon.svgIcon.circleIcon = function(options) {
    return new L.DivIcon.SVGIcon.CircleIcon(options)
}

L.Marker.SVGMarker.RhombusMarker = L.Marker.SVGMarker.extend({
    options: {
        "iconFactory": L.divIcon.svgIcon.circleIcon
    }
})

L.marker.svgMarker.circleMarker = function(latlng, options) {
    return new L.Marker.SVGMarker.CircleMarker(latlng, options)
}
