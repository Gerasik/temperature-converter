

exports.cToF = function (c) {
    const result = c * 9/5 + 32;
    return result.toFixed(2);
}

exports.fToC = function (f) {
    const result = (f - 32) * 5/9;
    return result.toFixed(2);
}
