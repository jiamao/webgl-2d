WebGL-2D
========

#### HTML5 Canvas2D API in WebGL. ####

这里只是针的：https://github.com/play-co/webgl-2d 的包装

### Usage ###

Switching your Canvas2D sketch to a WebGL2D is very simple and only requires one additional line of code:

    var cvs = document.getElementById("myCanvas");

    WebGL2D.enable(cvs); // adds "webgl-2d" context to cvs

    var ctx = cvs.getContext("webgl-2d"); // easily switch between "webgl-2d" and "2d" contexts

### Supported Canvas2D Features ###

WebGL-2D is a work in progress and currently supports a very small subset of the Canvas2D API. 

* strokeStyle
* fillStyle
* strokeRect
* fillRect
* translate
* rotate
* scale
* save
* restore
* lineWidth
* drawImage
* createImageData
* getImageData
* putImageData
* beginPath
* closePath
* moveTo
* lineTo
* rect
* fill*
* stroke* 

*fill and stroke only work on straight line paths supported above, arc, and curves are not yet supported.
