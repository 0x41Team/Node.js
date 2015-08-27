# Node.js

What are design patterns?

 A design pattern is general, reusable solution to a commonly occurring problem.
 
>####  Design pattern Module, Prototype, Function and Revealing module

#### Module pattern

* Module structure overview

```javascript

var Calculator = function() {
    // private variable
    // private function
    
    return {
        // public members
    }
}

```
* Module pattern structure

```javascript
var Calculator = function() {
    // private member
    var elDom = document.getElementById('el');
    
    return {
        // expose public member
        add: function(x, y) {
            var val = x + y;
            elDom.innerHTML = val;
        };
    };
};
```

> Using pattern:

```javascript
var calc = new Calculator();
calc.add(5,11); // Return value and set innert DOM Element
```

> You can use Namespace on define module

```javascript
var NS = NS || {};

NS.Calculator = function() {
     // Code something definition
}
```

#### Prototype pattern

> Cons:

1. `this` can be tricky
2. Contructor separate from prototype definition

* Prototype pattern structure

```javascript
var Calculator = function(el) {
     this.elDOM = document.getElementById(el);
};

Calculator.prototype = {
     add: function(x, y) {
         var val = x + y;
         this.elDOM.innerHTML = val;
     }
}
```

> Using pattern

```javascript
var calc = new Calculator('elDOM');
calc.add(5, 11); // Return value and set innert DOM Element
```

> So, if you define function using Namespace. You need call prototype together Namespace.
