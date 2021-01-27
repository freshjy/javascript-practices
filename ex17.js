// function 객체 메소드 call

globalThis.name = 'nodejs';

var f = function(s){
    console.log(s + ":" + this.name);
}

f('hello');

let o={
    name:'kickscar'
}

f.call(o, "hi");


