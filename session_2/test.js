var str = 'abc';
str[1] = 'd';
console.log("str: " + str);
str.newProp = 'aaa';
console.log("str.newProp: " + str.newProp);

const s = new String('abc');
s.newProp = 'b';
console.log("s.newProp: " + s.newProp);
s.newProp = 'b';
console.log("s.newProp: " + s.newProp);

