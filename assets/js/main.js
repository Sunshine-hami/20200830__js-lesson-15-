/* #1*/

var myNum = 10;
 myStr = 'строка';
 myBool = true;
 myArr = [1, 2, 3, 4, 5];
 myObj = {
    first: 'First Name',
    last: 'Last Name'
   };

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

/* #2*/
var decimal2 = myNum.toFixed(2);

/* #3*/

var i = 0;
console.log(++i);
console.log(i++);
console.log(i);
console.log(--i);
console.log(i--);
console.log(i);

/* #4*/

var myTest = 20;
myTest += myNum;
console.log(myTest);

myTest -= 15;
console.log(myTest);

myTest *= 5;
console.log(myTest);

myTest /= 3;
console.log(myTest);

/* #5*/
var myPi = Math.PI;
console.log('myPi:', myPi);

 var myRound = Math.round(89.279);
 console.log('myRound:', myRound);

 var myRandom = Math.random() * 10;
 console.log('myRandom:', myRandom);

 var myPow = Math.pow(3,5);
 console.log('myPow:', myPow);

/* #6*/

var strObj = {str:'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log(strObj);

/* #7*/

var isRamaPos = strObj.str.indexOf;
console.log(isRamaPos);

/* #8*/
var strReplace =strObj.str.replace ('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама') ;
strReplace = strReplace.replace ('мыла', 'держит');
console.log(strReplace);

/* #9*/

console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());
