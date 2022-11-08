(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-array'), require('d3-axis'), require('d3-brush'), require('d3-chord'), require('d3-collection'), require('d3-color'), require('d3-contour'), require('d3-dispatch'), require('d3-drag'), require('d3-dsv'), require('d3-ease'), require('d3-force'), require('d3-format'), require('d3-geo'), require('d3-hierarchy'), require('d3-interpolate'), require('d3-path'), require('d3-polygon'), require('d3-quadtree'), require('d3-random'), require('d3-scale'), require('d3-scale-chromatic'), require('d3-selection'), require('d3-selection-multi'), require('d3-shape'), require('d3-time'), require('d3-time-format'), require('d3-timer'), require('d3-transition'), require('d3-voronoi'), require('d3-zoom'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-d3-build', ['exports', 'd3-array', 'd3-axis', 'd3-brush', 'd3-chord', 'd3-collection', 'd3-color', 'd3-contour', 'd3-dispatch', 'd3-drag', 'd3-dsv', 'd3-ease', 'd3-force', 'd3-format', 'd3-geo', 'd3-hierarchy', 'd3-interpolate', 'd3-path', 'd3-polygon', 'd3-quadtree', 'd3-random', 'd3-scale', 'd3-scale-chromatic', 'd3-selection', 'd3-selection-multi', 'd3-shape', 'd3-time', 'd3-time-format', 'd3-timer', 'd3-transition', 'd3-voronoi', 'd3-zoom', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-d3-build"] = {}, global.d3Array, global.d3Axis, global.d3Brush, global.d3Chord, global.d3Collection, global.d3Color, global.d3Contour, global.d3Dispatch, global.d3Drag, global.d3Dsv, global.d3Ease, global.d3Force, global.d3Format, global.d3Geo, global.d3Hierarchy, global.d3Interpolate, global.d3Path, global.d3Polygon, global.d3Quadtree, global.d3Random, global.d3Scale, global.d3ScaleChromatic, global.d3Selection, null, global.d3Shape, global.d3Time, global.d3TimeFormat, global.d3Timer, global.d3Transition, global.d3Voronoi, global.d3Zoom, global.ng.core));
})(this, (function (exports, d3Array, d3Axis, d3Brush, d3Chord, d3Collection, d3Color, d3Contour, d3Dispatch, d3Drag, d3Dsv, d3Ease, d3Force, d3Format, d3Geo, d3Hierarchy, d3Interpolate, d3Path, d3Polygon, d3Quadtree, d3Random, d3Scale, d3ScaleChromatic, d3Selection, d3SelectionMulti, d3Shape, d3Time, d3TimeFormat, d3Timer, d3Transition, d3Voronoi, d3Zoom, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

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

    var d3Array__namespace = /*#__PURE__*/_interopNamespace(d3Array);
    var d3Axis__namespace = /*#__PURE__*/_interopNamespace(d3Axis);
    var d3Brush__namespace = /*#__PURE__*/_interopNamespace(d3Brush);
    var d3Chord__namespace = /*#__PURE__*/_interopNamespace(d3Chord);
    var d3Collection__namespace = /*#__PURE__*/_interopNamespace(d3Collection);
    var d3Color__namespace = /*#__PURE__*/_interopNamespace(d3Color);
    var d3Contour__namespace = /*#__PURE__*/_interopNamespace(d3Contour);
    var d3Dispatch__namespace = /*#__PURE__*/_interopNamespace(d3Dispatch);
    var d3Drag__namespace = /*#__PURE__*/_interopNamespace(d3Drag);
    var d3Dsv__namespace = /*#__PURE__*/_interopNamespace(d3Dsv);
    var d3Ease__namespace = /*#__PURE__*/_interopNamespace(d3Ease);
    var d3Force__namespace = /*#__PURE__*/_interopNamespace(d3Force);
    var d3Format__namespace = /*#__PURE__*/_interopNamespace(d3Format);
    var d3Geo__namespace = /*#__PURE__*/_interopNamespace(d3Geo);
    var d3Hierarchy__namespace = /*#__PURE__*/_interopNamespace(d3Hierarchy);
    var d3Interpolate__namespace = /*#__PURE__*/_interopNamespace(d3Interpolate);
    var d3Path__namespace = /*#__PURE__*/_interopNamespace(d3Path);
    var d3Polygon__namespace = /*#__PURE__*/_interopNamespace(d3Polygon);
    var d3Quadtree__namespace = /*#__PURE__*/_interopNamespace(d3Quadtree);
    var d3Random__namespace = /*#__PURE__*/_interopNamespace(d3Random);
    var d3Scale__namespace = /*#__PURE__*/_interopNamespace(d3Scale);
    var d3ScaleChromatic__namespace = /*#__PURE__*/_interopNamespace(d3ScaleChromatic);
    var d3Selection__namespace = /*#__PURE__*/_interopNamespace(d3Selection);
    var d3Shape__namespace = /*#__PURE__*/_interopNamespace(d3Shape);
    var d3Time__namespace = /*#__PURE__*/_interopNamespace(d3Time);
    var d3TimeFormat__namespace = /*#__PURE__*/_interopNamespace(d3TimeFormat);
    var d3Timer__namespace = /*#__PURE__*/_interopNamespace(d3Timer);
    var d3Transition__namespace = /*#__PURE__*/_interopNamespace(d3Transition);
    var d3Voronoi__namespace = /*#__PURE__*/_interopNamespace(d3Voronoi);
    var d3Zoom__namespace = /*#__PURE__*/_interopNamespace(d3Zoom);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var d3 = /*#__PURE__*/_mergeNamespaces({
        __proto__: null
    }, [d3Array__namespace, d3Axis__namespace, d3Brush__namespace, d3Chord__namespace, d3Collection__namespace, d3Color__namespace, d3Contour__namespace, d3Dispatch__namespace, d3Drag__namespace, d3Dsv__namespace, d3Ease__namespace, d3Force__namespace, d3Format__namespace, d3Geo__namespace, d3Hierarchy__namespace, d3Interpolate__namespace, d3Path__namespace, d3Polygon__namespace, d3Quadtree__namespace, d3Random__namespace, d3Scale__namespace, d3ScaleChromatic__namespace, d3Selection__namespace, d3Shape__namespace, d3Time__namespace, d3TimeFormat__namespace, d3Timer__namespace, d3Transition__namespace, d3Voronoi__namespace, d3Zoom__namespace]);

    var NgxD3Service = /** @class */ (function () {
        function NgxD3Service() {
        }
        NgxD3Service.prototype.getD3 = function () {
            return d3;
        };
        return NgxD3Service;
    }());
    NgxD3Service.ɵfac = function NgxD3Service_Factory(t) { return new (t || NgxD3Service)(); };
    NgxD3Service.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: NgxD3Service, factory: NgxD3Service.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxD3Service, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    /*
     * Public API Surface of ngx-d3
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxD3Service = NgxD3Service;
    Object.keys(d3Array).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Array[k]; }
        });
    });
    Object.keys(d3Axis).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Axis[k]; }
        });
    });
    Object.keys(d3Brush).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Brush[k]; }
        });
    });
    Object.keys(d3Chord).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Chord[k]; }
        });
    });
    Object.keys(d3Collection).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Collection[k]; }
        });
    });
    Object.keys(d3Color).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Color[k]; }
        });
    });
    Object.keys(d3Contour).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Contour[k]; }
        });
    });
    Object.keys(d3Dispatch).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Dispatch[k]; }
        });
    });
    Object.keys(d3Drag).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Drag[k]; }
        });
    });
    Object.keys(d3Dsv).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Dsv[k]; }
        });
    });
    Object.keys(d3Ease).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Ease[k]; }
        });
    });
    Object.keys(d3Force).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Force[k]; }
        });
    });
    Object.keys(d3Format).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Format[k]; }
        });
    });
    Object.keys(d3Geo).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Geo[k]; }
        });
    });
    Object.keys(d3Hierarchy).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Hierarchy[k]; }
        });
    });
    Object.keys(d3Interpolate).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Interpolate[k]; }
        });
    });
    Object.keys(d3Path).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Path[k]; }
        });
    });
    Object.keys(d3Polygon).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Polygon[k]; }
        });
    });
    Object.keys(d3Quadtree).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Quadtree[k]; }
        });
    });
    Object.keys(d3Random).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Random[k]; }
        });
    });
    Object.keys(d3Scale).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Scale[k]; }
        });
    });
    Object.keys(d3ScaleChromatic).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3ScaleChromatic[k]; }
        });
    });
    Object.keys(d3Selection).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Selection[k]; }
        });
    });
    Object.keys(d3Shape).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Shape[k]; }
        });
    });
    Object.keys(d3Time).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Time[k]; }
        });
    });
    Object.keys(d3TimeFormat).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3TimeFormat[k]; }
        });
    });
    Object.keys(d3Timer).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Timer[k]; }
        });
    });
    Object.keys(d3Transition).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Transition[k]; }
        });
    });
    Object.keys(d3Voronoi).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Voronoi[k]; }
        });
    });
    Object.keys(d3Zoom).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () { return d3Zoom[k]; }
        });
    });

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-d3-build.umd.js.map
