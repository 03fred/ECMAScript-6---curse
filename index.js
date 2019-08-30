//Fat arrow
//with params
var x = (a,b) => a+""+b;
console.log(x("oi"));

//without params

var x = () => "hello world";
console.log(x());


//call function within another function
//setTimeout(() => alert('hello ecmascript'),1000);

var x = () =>{ a = "hello"; b= "world" ; alert(a+" "+b)};
x();