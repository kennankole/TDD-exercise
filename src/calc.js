const lodash = require('lodash')

class Calculator {
    add(...args){
        return lodash.sum(args)
    }

    subtract(a, b){
        if (a > b){
            return lodash.subtract(a, b)
        }else {
            return lodash.subtract(b, a)
        }
    }

    multiply(...args) {
        if (Math.min(...args) > 0){
            return lodash.multiply(...args);
        }else {
            return 0;
        }
    }

    divide(a, b){
        if (a && b > 0) {
            return lodash.divide(a, b)
        }else {
            return;
        }
    }

}

module.exports = new Calculator()