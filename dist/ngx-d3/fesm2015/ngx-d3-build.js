import * as d3Array from 'd3-array';
export * from 'd3-array';
import * as d3Axis from 'd3-axis';
export * from 'd3-axis';
import * as d3Brush from 'd3-brush';
export * from 'd3-brush';
import * as d3Chord from 'd3-chord';
export * from 'd3-chord';
import * as d3Collection from 'd3-collection';
export * from 'd3-collection';
import * as d3Color from 'd3-color';
export * from 'd3-color';
import * as d3Contour from 'd3-contour';
export * from 'd3-contour';
import * as d3Dispatch from 'd3-dispatch';
export * from 'd3-dispatch';
import * as d3Drag from 'd3-drag';
export * from 'd3-drag';
import * as d3Dsv from 'd3-dsv';
export * from 'd3-dsv';
import * as d3Ease from 'd3-ease';
export * from 'd3-ease';
import * as d3Force from 'd3-force';
export * from 'd3-force';
import * as d3Format from 'd3-format';
export * from 'd3-format';
import * as d3Geo from 'd3-geo';
export * from 'd3-geo';
import * as d3Hierarchy from 'd3-hierarchy';
export * from 'd3-hierarchy';
import * as d3Interpolate from 'd3-interpolate';
export * from 'd3-interpolate';
import * as d3Path from 'd3-path';
export * from 'd3-path';
import * as d3Polygon from 'd3-polygon';
export * from 'd3-polygon';
import * as d3Quadtree from 'd3-quadtree';
export * from 'd3-quadtree';
import * as d3Random from 'd3-random';
export * from 'd3-random';
import * as d3Scale from 'd3-scale';
export * from 'd3-scale';
import * as d3ScaleChromatic from 'd3-scale-chromatic';
export * from 'd3-scale-chromatic';
import * as d3Selection from 'd3-selection';
export * from 'd3-selection';
import 'd3-selection-multi';
import * as d3Shape from 'd3-shape';
export * from 'd3-shape';
import * as d3Time from 'd3-time';
export * from 'd3-time';
import * as d3TimeFormat from 'd3-time-format';
export * from 'd3-time-format';
import * as d3Timer from 'd3-timer';
export * from 'd3-timer';
import * as d3Transition from 'd3-transition';
export * from 'd3-transition';
import * as d3Voronoi from 'd3-voronoi';
export * from 'd3-voronoi';
import * as d3Zoom from 'd3-zoom';
export * from 'd3-zoom';
import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
        e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
            if (k !== 'default' && !(k in n)) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    });
    return Object.freeze(n);
}

var d3 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null
}, [d3Array, d3Axis, d3Brush, d3Chord, d3Collection, d3Color, d3Contour, d3Dispatch, d3Drag, d3Dsv, d3Ease, d3Force, d3Format, d3Geo, d3Hierarchy, d3Interpolate, d3Path, d3Polygon, d3Quadtree, d3Random, d3Scale, d3ScaleChromatic, d3Selection, d3Shape, d3Time, d3TimeFormat, d3Timer, d3Transition, d3Voronoi, d3Zoom]);

class NgxD3Service {
    constructor() { }
    getD3() {
        return d3;
    }
}
NgxD3Service.ɵfac = function NgxD3Service_Factory(t) { return new (t || NgxD3Service)(); };
NgxD3Service.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgxD3Service, factory: NgxD3Service.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxD3Service, [{
        type: Injectable
    }], function () { return []; }, null); })();

/*
 * Public API Surface of ngx-d3
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxD3Service };
//# sourceMappingURL=ngx-d3-build.js.map
