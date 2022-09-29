function sumV1(){
    let sum = 0;
    let args = Array.prototype.slice.call(arguments);
    args.forEach(ele => {
        sum += ele;
    })
    return sum;
}

function sumV2(...args){
    let sum = 0;
    args.forEach(ele => {
        sum += ele;
    })
    return sum;
}
