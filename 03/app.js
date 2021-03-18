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

var isMan = false;
var isHero=true;
if(isMan){
    console.log(1);
}else if((!isMan) && (isHero)){
    console.log(0);
}else{
    console.log(2);
}