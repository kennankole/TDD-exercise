function stringLength(str) {
    let count = 0;
    if (str.length >= 1 && str.length <= 10) {
        str.split('').forEach(() => count++)
        return count; 
    }else {
        return;
    }
   
}

module.exports = stringLength


