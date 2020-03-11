"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var alg = main_1.loopALL;
var throwE = function () { throw new Error(); };
console.log(alg);
typeof alg === "function" || throwE();
var failed = false;
failed = false;
try {
    main_1.loopALL(13, function () { });
    failed = true;
}
catch (error) {
}
if (failed === true)
    throwE();
failed = false;
try {
    main_1.loopALL(0, function () { });
    failed = true;
}
catch (error) {
}
if (failed === true)
    throwE();
failed = false;
try {
    main_1.loopALL(function () { }, function () { });
    failed = true;
}
catch (error) {
}
if (failed === true)
    throwE();
failed = false;
try {
    main_1.loopALL(false, function () { });
    failed = true;
}
catch (error) {
}
if (failed === true)
    throwE();
failed = false;
try {
    main_1.loopALL(true, function () { });
    failed = true;
}
catch (error) {
}
if (failed === true)
    throwE();
var ds = [1, 2, 3];
var es = [];
main_1.loopALL(ds, function (e) { es.push(e); });
ds.forEach(function (e, i) { es[i] === e || throwE(); });
var zs = {
    0: 0,
    1: {
        2: 2,
        3: [
            3, 4
        ]
    },
    5: 5,
    6: 6
};
var ans = [0, 2, 3, 4, 5, 6, 7];
var qw = [];
var i = 0;
main_1.loopALL(zs, function (e) {
    ans[i++] === e || throwE();
});
