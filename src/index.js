
exports.min = function min (array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
    let a = array[0];
        for (let i = 0; i < array.length; i++) {
            if (a > array[i]) {
            a = array[i];
            }
        }
    return a;
    }
}

exports.max = function max (array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
    let a = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > a) {
            a = array[i];
            }
        }
    return a;
    }
  
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    return result = sum / array.length;
    }
}
