# Leaflet-SVGIcon
L.DivIcon.SVGIcon is a simple and customizable SVG marker icon with no external library or file dependencies. By default, 1 emoji, 2 characters of text or about 3 numerals can fit inside the icon's inner circle.

Also included is L.Marker.SVGMarker, a small Marker wrapper class for SVGIcons with a setStyle implementation that handles marker opacity changes, monochromatic color changes and changes to specific icon options.

## Requirements
- Leaflet 0.7+ (earlier versions may work, but are untested) 
- Browser support for SVG

## Demo
*Forthcoming*

## Usage
- Include the source file
````xml
<script src="svg-icon.js"></script>
````
- Use an SVGMarker
````js
var marker = new L.Marker.SVGMarker(latlng)
````
- Use any place Icons are accepted
````js
var marker = new L.Marker(latlng, { icon: new L.DivIcon.SVGIcon() })
````

## Properties
### L.DivIcon.SVGIcon

**All colors must be specified as "rgb(...)".**

*Unspecified Icon options are ignored*

|Option|Type|Default|Description|
|------|----|-------|-----------|
|circleText|String|""|Text to include in the center of the icon|
|className|String|"svg-icon"|Class prefix to use for icon elements|
|circleAnchor|Point|[iconSize.x/2, iconSize.x/2]|Point of origin for the icon's inner circle|
|circleColor|String|same as "color"|Color of the icon's inner circle border|
|circleOpacity|Number|same as "opacity"|Opacity of the icon's inner circle border|
|circleFillColor|String|"rgb(255,255,255)"|Color of the icon's inner circle interior|
|circleFillOpacity|Number|same as "opacity"|Opacity of the icon's inner circle interior|
|circleRatio|Number|0.5|Ratio of the width of the icon's inner circle to the width of the marker. Set to 0 to disable circle|
|circleWeight|Number|same as "weight"|Width of the icon's inner circle border|
|color|String|"rgb(0,102,255)"|Color of the icon's border|
|fillColor|String|same as "color"|Color of the icon's interior|
|fillOpacity|Number|0.4|Opacity of the icon's interior|
|fontColor|String|"rgb(0,0,0)"|Color of the icon's center text|
|fontOpacity|Number|1|Opacity of the icon's center text|
|fontSize|Number|iconSize.x/4|Font size in pixels of the icon's center text|
|iconAnchor|Point|[iconSize.x/2, iconSize.y]|The point to align over the marker's geographic location|
|iconSize|Point|[32,48]|The size of the icon|
|opacity|Number|1|Opacity of the icon's border|
|popupAnchor|Point|[0,(-0.75*iconSize.y)]|Point of origin for bound popups relative to the iconAnchor|

### L.Marker.SVGMarker

*All standard L.Marker options are supported.*

|Option|Type|Default|Description|
|------|----|-------|-----------|
|iconFactory|method|L.divIcon.svgIcon|The factory method to use when creating the SVGIcon. Only useful for SVGIcon subclasses|
|iconOptions|Dictionary|{}|A dictionary of icon options to pass|

## Methods
### L.DivIcon.SVGIcon
*This class does not include any methods that are intended to be user accessible as part of normal use. The following are the internal methods use to generate the icon. They may be modified in a subclass, but all methods with the exception of* _createPathDescription *may be modified using icon options only. Due to the computations inherent in creating the path description,* _createPathDescription *must be modified in order to change the overall icon shape.*

#### _createCircle()
Creates the icon's inner circle. This method is 100% customizable using icon options exclusively, and should not need to be modified in most cases.

#### _createPath()
Creates the main body of the icon. All aspects of the icon body with the exception of the shape itself may be customized used icon options.

#### _createPathDescription()
Creates the drawing instructions for the icon's shape. This method must be modified in order to change the icon's shape. See the **Advanced Customization** section for more information.

#### _createSVG()
Creates the final SVG element. This method should not need to be modified unless a subclass requires additional elements. Note that HTML elements need to be placed outside the main <svg> element.

#### _createText()
Creates the SVG text element. More text can be fit without modifying this method by increasing the size of the icon, circle and specifying a font size.

### L.Marker.SVGMarker

#### setStyle(style)
This method supports three style values:
- opacity: Equivalent to using *setOpacity* i.e. the opacity of the entire marker icon changes. 
- color: Monochromatically sets the icon border color, interior color and inner circle border color
- iconOptions: A dictionary of specific icon options to change. These may be any SVGIcon option.

If "color" and "iconOptions" are specified, "iconOptions.color" is set to "color".

## Advanced Customization
The body of the icon is drawn using an SVG path. The shape may be changed by replacing the *_createPathDescription* method of L.DivIcon.SVGIcon to return a different path description i.e. the path drawing instructions. Please see the Mozilla Developer Network's [SVG Path Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) for more information on SVG paths.

This repository includes an example L.DivIcon.SVGIcon.RhombusIcon subclass and accompanying convenience L.Marker.SVGMarker.RhombusMarker subclass.