# snakeify_object

A simple one method library for transforming an object with snake cased keys into a camel cased object. Actually, a new one. No mutation. :)

```
const snakeifyObject = require("snakeify-object");
   
let camelCased = snakeifyObject({pleaseNo: "camelCase"});
```
