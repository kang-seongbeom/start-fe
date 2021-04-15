//console.log(03);

/*CRUD*/

// //Create
// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos);

//Read
// var todos = ['운동','게임'];
// todos.forEach(function(todo){
//     console.log(todo);
// });

//Update (find)
// var todos = ['운동','게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo){
//     return (todo === updateTodo)
// });
// todos[updateIndex] = '공부';
// console.log(todos);

//Update (map)
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var newTodos = todos.map(function(todo){
//     if(todo === updateTodo){
//         return '공부'
//     }
//     return todo;
// });
// console.log(newTodos);

//Delete (find)
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo){
//     return (todo === deleteTodo);
// });
// todos.splice(deleteIndex,1);
// console.log(todos);

//Delete (filter)
// var todos = ['운동', '공부'];
// var deleteTodo = '공부';
// var newTodos = todos.filter(function(todo){
//     return todo !== deleteTodo;
// });
// console.log(newTodos);

//참조 타입

// var a = 1;
// var b= a;
// b = 2;
// console.log(a,b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a,b);

// var a = {x:1};
// var b = a;
// b.x = 2;
// console.log(a,b);

//값이 변하지 않음
// function byValue(count){
//     count = count + 2;
// }
// var count = 3;
// byValue(count);
// console.log(count);

//값이 변함 call by refence
// function byReference(count){
//     count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count);

// var isMan = false;
// var isHero=true;
// if(isMan){
//     console.log(1);
// }else if((!isMan) && (isHero)){
//     console.log(0);
// }else{
//     console.log(2);
// }

// for(var i=1; i<10; i++){
//     console.log(i,'단')
//     for(var j=1; j<10; j++){
//         console.log(i,'*',j,'=',i*j);
//     }
//     console.log("--------------");
// }

//alert창에 edit text 추가
// var who = prompt("넌 누구냐?");
// console.log(who);

//alert창에 확인, 취소 버튼
// var isDelete = confirm('진짜 삭제?');
// console.log(isDelete);

//숫자인지 판단. 숫자이면 false
// console.log(isNaN('1'));

// function test(){
//     console.log("time");
// }

//1초후 1번
//var id = setTimeout(test(), 1000);

//1초후마다 clear 호출까지
// var id = setInterval(test(), 1000);

//호스팅
// var name = '강성범';
// function test(){
//     console.log(name); //왜 undifined이지?
//     var name = '2017108243';
//     console.log(name);
// }
// test();

// test2();
// function test2(){
//     console.log("test2");
// }

// function sum(a, b){
//     return a+b;
// }
// console(sum(1,2));

// var car = {
//     year : 2021,
//     starting : function(){
//         console.log(this.year);
//     },
// };
// car.starting();

//즉시실행. 익명 클래스와 비슷. 캡슐화
// (function(){
//         var a='a';
//     alert(a);
// })();

// function sum(x,y){
//     if(!y) y=1;
//     console.log(x+y);
// }
// sum(3); // 4
// sum(3,3); //6

//가변 길이 전달 인자
// function sum(){
//     var sum = 0;
//     for (var i = 0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     console.log(sum);
// }
// sum(1,2,3,4,5,6,7,8,9,10);

//정규식 Regx

//test
//true, fasle로 반환
// var text = 'abc def ghi';
// var testRegx = /abc1/;
// var result = testRegx.test(text);
// console.log(result);

//match
//객체와 null로 반환
// var text = 'abc def ghi';
// var matchRegx = /abc/;
// var result = text.match(matchRegx);
// console.log(result);

//replace
//대체 되거나 대체 되지 않거나
// var text = 'abc def ghi';
// var replaceRegx = /abc1/;
// var result = text.replace(replaceRegx, 'zzz');
// console.log(result);
