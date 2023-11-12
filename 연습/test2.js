//v1
/*
console.clear();
let a사람;
let a사람__이름 = "홍길동";
let a사람__성별 = "남자";
let a사람__age = "20";
console.log(a사람__성별);
*/
//v2
/*
let a사람 ={};
a사람.이름 = "홍길동";
a사람.성별 = "남자";
a사람.나이 = 22;
console.log(a사람);
*/
//v3
/*
let a사람 ={};
a사람["이름"] = "홍길동"; //a사람[이름] = "홍길동"; 와는 다름. 꼭 쌍따음표를 붙여야 함.
a사람["성별"] = "남자";
a사람["나이"] = 22;
console.log(a사람);
*/
//v4
/*
function 자기소개(a사람){
  console.log("== 자기소개 시작 ==");
  console.log("이름: " +a사람1.이름);
  console.log("성별: " +a사람1.성별);
  console.log("나이: " +a사람1.나이);
  console.log("키: "+a사람1.키);
  console.log("이름: " +a사람2.이름);
  console.log("성별: " +a사람2.성별);
  console.log("나이: " +a사람2.나이);
  console.log("키: "+a사람2.키);
}
let a사람1 ={
  이름:"홍길동",
  성별:"남자",
  나이:22,
};
a사람1.키 = 178;
a사람1.이름 = "홍길순";
console.log(a사람1);
let a사람2 ={
  이름:"임꺽정",
  성별:"남자",
  나이:25,
  키:188
};
자기소개(a사람1);
*/

console.clear();
//v4.1
/*
let a사람1 = {};
a사람1.이름="홍길동";
a사람1.자기소개 = function(){
  console.log("안녕하세요. 저는 " + a사람1.이름 + " 입니다.");
};
let a사람2 = {};
a사람2.자기소개 = function(){
  console.log("안녕하세요. 저는 " + a사람2.이름 + " 입니다.");
};
a사람1.자기소개();
a사람2.자기소개();
*/
/*
let a사람1 = {};
a사람1.이름="홍길동";
a사람1.자기소개 = function(){
  console.log("안녕하세요. 저는 " + this.이름 + " 입니다.");
};
let a사람2 = {};
a사람2.이름="김철수";
a사람2.자기소개 = function(){
  console.log("안녕하세요. 저는 " + this.이름 + " 입니다.");
};
a사람1.자기소개();
a사람2.자기소개();
*/
/*
let ages={};
ages.철수=20;
ages.영희=22;
ages.경수=32;
console.log(ages);
*/
//{철수:20, 영희:22, 경수:32}=>'ages.철수'이것을 라벨링이라고 하는데, 라벨링이 뭐냐면은 라벨 스티커 붙이듯이 데이터에 어떤정보를 추가한다.
//나이 세개는 필요한데 딱히 누구껀지 기억할 필요가 없다면? 조금 특별한 형태의 객체를 만들면 편한데,
//{}이걸 객체라고 하고, []이걸 배열객체하고 함.
/*
let ages=[];
ages.push(22);//0
ages.push(32);//1
ages.push(42);//2
ages[3]=55;
console.log(ages); //[22,32,42]
console.log(ages[0]);
console.log(ages[2]);
console.log(ages.length); //3
*/
/*
let ages=[10,20,30,40];
let agesSum=0;
for(let i = 0;i<ages.length;i++){
  console.log(i);
  console.log(ages[i]);
  agesSum += ages[i];
}
console.log("나이 총합:"+agesSum);
console.log("나이 평균:"+agesSum/ages.length);
*/
//배열의 요소를 모든 요소를 순회한다는 표현을 쓰는데, 배열 안에 있는 모든것들을 쓰는 거에요.











