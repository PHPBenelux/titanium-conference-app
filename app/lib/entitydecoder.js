exports.decode = function(str) {
    return str.replace(/&#([0-9]{1,4});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10); // read num as normal number
        return String.fromCharCode(num);
    });
};
