//increment or decrement operator
// pre increment & post increment
// ++p, --p (if there are 2 operation in the statement, the other operation will be executed first and increment or decrement happens later)
// p++, p-- (if there are 2 operation in the statement, the other operation will be executed later; the increment happens first)
// in post increment, the increment will happen later
// in pre increment, the increment will happen first & then remaining operation will be executed.
let p = 10;
let q,t;
q = p++; // here first p will be assinged to q, the increments
t = ++p; // here first increment happens, then p will be assigned to t

console.log(`q: ${q}, t: ${t}`)





