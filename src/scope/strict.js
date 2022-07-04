'use strict';
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());

'use strict';
var pi;
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';
    let pi;
    return pi = 3.1416;
}

console.log(myFunction());