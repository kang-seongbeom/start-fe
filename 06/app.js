//console.log(06)

// let a = 'a';
// const b= 'bb';
// var c = '11';
// c= '22';
// console.log(a ,b ,c);

// var str = 'aaaaaaa  \ 
// asd'

// const s = `aaa
// ccc
// d`;
// console(str, s);

// function sum(x,y=1){
//     return x+y;
// }
// console.log(sum(1));

// const arr = [1,2,3];
// const newArr = arr.map(function(item){
//     return item + 1;
// });
// console.log(newArr);


// const arr = [1,2,3];
// const newArr = arr.map((item) =>item + 1);
// console.log(newArr);

// document.getElementById('box').addEventListener('click', (event) => console.log(1));

//전개
// function sum(x,y,z){
//     return x+y+z;
// }
// const number = [1,2,3];
// console.log(sum(...number));
// console.log(sum(1,2,3));

//...는 call by value
// const word = ['a', 'b'];
// const newWord = [...word];
// newWord.push('c');
// console.log(word);
// console.log(newWord);

// const words = ['a', 'b'];
// const newWords = [...words];
// console.log(newWords);

// const arr1 = [3, 4, 5];
// const arr2 = [1, 2, ...arr1, 6, 7];
// console.log(arr2);

// const obj = { a: 1, b: 2};
// const newOnj = {...obj};
// console.log(newOnj);

//es6
// function func(...param){
//     console.log(param);
// }
// func(1,2,3);

//es5
// function func() {
//     console.log(arguments);
//   }  
// func(1, 2, 3);

//구조, 분해 할당
// const words = ['a', 'b'];
// const [c1, c2] =words;
// console.log(c1, c2);

// function getArea({ width, height}){
//     return (width * height);
// }
// console.log(getArea({width: 1,height : 2}));

//향상된 객체 리터럴
// const number = 1234;
// const student = {
//     number,
//     //number : number
// };
// console.log(student);

// const number = 1234;
// const student ={
//     number,
//     playGame(){
//         console.log('play');
//     }
// };
// console.log(student);

