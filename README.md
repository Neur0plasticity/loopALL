# loopALL
full scan list variable for something with callback


const loopALL = require("loopALL");
const throwE = function(){throw new Error();};

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


loopALL(zs,function(value,index,list){  

    ans[i++] === value || throwE();

});