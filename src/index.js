module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig;
    let ch = str.split("");
    let arrStr = arr
        .join("")
        .split("")
        .filter(function (value) {
            return !(value === ",");
        });
    let stack = [];
    let openBr = [];
    let closeBr = [];
    let closeInd, openInd;
    openBr = arrStr.filter(function (value, index) {
        return index % 2 === 0;
    });
    closeBr = arrStr.filter(function (value, index) {
        return index % 2 === 1;
    });
    for (let i = 0; i < ch.length; i++) {
        openInd = openBr.indexOf(ch[i]);
        if (openInd !== -1) {
            stack.unshift(openInd);
        }
        closeInd = closeBr.indexOf(ch[i]);
        if (closeInd !== -1) {
            openInd = stack.shift();
            if (closeInd !== openInd) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};
