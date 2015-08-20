//process.argv.forEach(function(val, index, array) {
//    console.log(index + ': ' + val);
//});
module.exports = {
    sayHello: function() {
        "use strict";
        console.log("the big bang theory");
    },
    nothing: function() {
        "use strict";
        console.log('fucking any where');
    }
};

exports.sayThanks = function() {
    "use strict";
    return {
        fn: console.log('0xgi')
    };
};

function protoType(name) {
    "use strict";
    this.flags = name;
    console.log(this);
}
protoType.prototype.theory = function() {
    "use strict";
    console.log('append prototype');
};

console.log(protoType.prototype);
console.log(protoType.prototype.__proto__);


var test = new protoType('0xgi');
test.theory();


console.log(module.exports);
console.log(require('./fn.js'));