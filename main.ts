export const loopALL = function(v,loopCB) {
    enter(v,loopCB) || throwE();
    for (let k in v) {
        if (enter(v[k],loopCB))    loopALL (v[k], loopCB);
        else                loopCB  (v[k], k, v);
    }
    return true;
};
/////////////////////////////////////////////////////////////////////////////
const enter = function(v,loopCB){
    return (Array.isArray(v) || typeof v === "object" || typeof v === "string") && typeof loopCB === "function";
};
const throwE = function(){throw new Error();};
