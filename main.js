"use strict";
exports.__esModule = true;
exports.loopALL = function (v, loopCB) {
    enter(v, loopCB) || throwE();
    for (var k in v) {
        if (enter(v[k], loopCB))
            exports.loopALL(v[k], loopCB);
        else
            loopCB(v[k], k, v);
    }
    return true;
};
/////////////////////////////////////////////////////////////////////////////
var enter = function (v, loopCB) {
    return (Array.isArray(v) || typeof v === "object" || typeof v === "string") && typeof loopCB === "function";
};
var throwE = function () { throw new Error(); };
