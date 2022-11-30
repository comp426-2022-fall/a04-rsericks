export function roll(x,y, z){
    var results = [];
    for (let i=0; i <z; i++){
        var totalRoll = 0;
        for (let j =0; j <y; j++){
            var thisRoll = 1 + Math.floor(Math.random() * x);
            totalRoll += thisRoll;
        }
        results.push(totalRoll);
    }
    const totalResult ={
        "sides": x,
        "dice": y,
        "rolls": z,
        "results": results
    }
    return totalResult;
}