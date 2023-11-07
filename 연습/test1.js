console.clear();


/*함수1
let printHello = function(){
  console.log("안녕하세요.");
  console.log("안녕하세요.");
  console.log("안녕하세요.");
};
printHello();
*/

/*함수2
let k=function(){
  console.log('k실행됨')
};
let kk=function(){
  console.log('kk실행됨')
};
let aa=function(){
  console.log('aa실행됨')
};
k();
kk();
aa();
*/

/*v1
let plus = function(a,b){
  console.log(a+b);
};
plus(10,20);
plus(100,200);
*/

/*
let hello = function(lang){
  if (lang == "한국어"){
    console.log("안녕");
  }
  else if(lang=="일본어"){
    console.log("곤니치와")
  }
  else {
    console.log("Hello");
  }
}
hello("한국어");
hello("영어");
hello("일본어");
*/

// function plus(a,b){
//   console.log(a+b);
// };
// plus(10,20);

/*
function plus(a,b){
  console.log(a+b);
  return 5;
};
plus(10,20);
let a = plus(10,20);
console.log(a);
*/

/*
function plus(a,b){
  return 5+a+b;
};
let a = plus(10,20);
console.log(a);


let plusRs = plus(1,2);
console.log(plusRs);

function minus(a,b){
  return a-b;
}

function multi(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

let minusRs = minus(5,10);
console.log(minusRs);

let multiRs = multi(5,10);
console.log(multiRs);

let divideRs = divide(5,10);
console.log(divideRs);
*/

function print_1_to_100{
  for (let i = 1; i<=100; i++);
  console.log(i);
}

function print_1_to_N(n){
  for (let i = 1; i<=n; i++);
  console.log(i);
}

function printNToM(n, m){
  for (let i = n; i<=m; i++);
  console.log(i);
}

printNToM(3,5);


function get1To3Sum(s){
  /*s=s+1;
  s=s+2;
  s=s+3;*/
  i=0;
  s=s+i;
  i++;
  return s;
}
console.log(get1To3Sum(10));