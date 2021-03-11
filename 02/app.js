//js기본 1_2
//객체
var image = {
    width : 100,
    height : 100,
    name: '1.page'
};

var image1=[1,2,3,4,5,6,"a",{}];
image1[0] = 'a';
//console.log(image, image1)

var data = null;
var data1 = '';
var data2; //undefinde
//console.log(data,data1,data2);

//노가다
//var imageWidth = 100;
//var imageHight = 100;
//var imageName = "1.png";

//console.log(1+2);
//console.log("a"+ "b");
//console.log(1+'4');

var count = 1;
var num = '2';
//console.log(count + num);

//console.log(1 == 1);
//console.log(1 == 2);
//console.log('' == '0');
//console.log(0 === '');

if(true){
    //console.log(1);
}else{
    //console.log(0);
}

var isHero = true;
var isHulk = false;

if(isHero){
    //console.log(1);
}

if(!isHero){
    //console.log(0);
}

if((isHero) && (isHulk)){
    //console.log(1);
}

var image = { width: 1, height: 2 };

//console.log('width' in image);
//console.log('size' in image);
//console.log('toString' in image);

//delete image.width;
//image.width = null; 

// console.log(typeof 1);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof '1');

var arr = [1, 2, 3];
console.log(a instanceof Array);