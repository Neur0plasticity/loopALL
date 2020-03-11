import { loopALL } from "./main";

const alg = loopALL;
const throwE = function(){throw new Error();};

console.log(alg);

typeof alg === "function" || throwE();

let failed = false;

failed = false;
try {
    loopALL(13,function(){})
    failed = true;
} catch (error) {

}
if (failed === true) throwE();

failed = false;
try {
    loopALL(0,function(){})
    failed = true;
} catch (error) {

}
if (failed === true) throwE();

failed = false;
try {
    loopALL(function(){},function(){})
    failed = true;
} catch (error) {

}
if (failed === true) throwE();

failed = false;
try {
    loopALL(false,function(){})
    failed = true;
} catch (error) {

}
if (failed === true) throwE();

failed = false;
try {
    loopALL(true,function(){})
    failed = true;
} catch (error) {

}
if (failed === true) throwE();


let ds = [1,2,3];
let es = [];

loopALL(ds,function(e){es.push(e);})

ds.forEach((e,i)=>{ es[i] === e || throwE(); });

const zs = {
    0: 0,
    1: {
        2: 2,
        3: [
            3,4
        ]
    },
    5:5,
    6:6
};

const ans = [0,2,3,4,5,6,7];

let qw = []; let i = 0;


loopALL(zs,function(e){  

    ans[i++] === e || throwE();

});