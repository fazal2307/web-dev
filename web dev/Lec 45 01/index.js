
let lastName = ' Babber ';
lastName
 let firstName = new String('fazal');

 let message = `This ${lastName},
 is my 
 first 
 paragraph`;
 console.log(message);
 // date and time
  let date2 = new Date(1999,6,23,4);
date2.setFullYear(1964);
  console.log(date2);
  // array
   let number = [1,2,3,7,89,12];
   console.log(number);
 
  let array = [12,23,45,56,78,47]
  console.log(array);

  //end
  array.push(9)
  //Begi
  array.unshift(1)
  // mid
  array.splice(3,0,'a','d',)

  // Searching
 let array1 = [1,5,7,9,41,47,12];
 console.log(array1);
 console.log(array1.indexOf(12));

 // we want to check if a number exist in an array
 if(array1.indexOf(1) != -1)
    console.log('present');
    //its not a good way to right
    
    //its good way to right
    console.log(array1.includes(5));
// object insertion
let courses = [
    {id:1,name:'fazal'},
    {id:2,name:'afzal'}
]; 


let course = courses.find(course => course.name ==='fazal');
    
console.log(course);

// removing element
let fazal = [12,23,45,78,56,10,14]
console.log(fazal);
// end
fazal.pop()
//Begi
fazal.shift
//middle
fazal.splice
 
// Emptying an array
let afzal = [12,45,85,46,13];
let afzal1 = afzal;
afzal.splice(0,afzal.length);

console.log(afzal);
console.log(afzal1);


// Combinig & Slicing Arrays;
let first = [1,2,3,4,5];
let second = [7,8,9,6,10];
let third = first.concat(second);
console.log(third);    
 // slicing
 let marks = [10,20,30,40,50,60,70,80];
 let sliced = marks.slice(2,5);
 console.log(sliced);
 
 var my_object = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four'
 };
 
 var slice1 = Array.prototype.slice.call(my_object, 4);
 console.log(slice1);
 let first1 = [1,2,3,4];
 let second1 = [5,6,7,8];
 let combined = [...first1,'a',...second1,'f','r'];
 console.log(combined);
// iterating an array
 let arr = [10,20,30,40,50,60,70];
 for(let value of  arr){
  console.log(value);
 }
arr.forEach(number=>  console.log(number)
);
// joining Array
 let numbers3 = [10,20,30,40,50,60,70,];
const joined = numbers3.join(',');
 console.log(joined);
 //split 
 let message1 = 'This is my first message';
 let parts = message1.split(' ');
 console.log(parts);
 let joined1= parts.join('_');
 console.log(joined1);

// soting Array
let why = [10,30,85,46,72,32];
 why.sort();
 console.log(why);
why.reverse();
console.log(why);
// for object 

let arr4 = [{id:3,name:'fazal'},
{id:20,name:'afzal'},
{id:33,name:'aapi'},
{id:4,nmae:'falana'}];
arr4.sort((a, b) => a.id - b.id);
console.log(arr4);
// filter Array
let numbers = [1,2,-1,-2];
  //let filtered = numbers.filter(function(value){
  //return value >=0;
 //});

 //console.log(filtered);
 // arrow
 let filtered = numbers.filter(value => value >= 0);
 console.log(filtered);
// map array
  let anumber = [4,5,6,9,3];
  anumber.sort();
  let v1 = anumber.map(value => 'student_no'+value );
  console.log(v1)

// Mapping with object in array
let numbers1 = [1,2,-1,-6];
let filtered8 = numbers1.filter(value => value >=0);
 let items5 = filtered8.map(num => ({value:num}));
console.log(items5):

// chaining map array//
 let numbers2 = [1,2,4,5,-5,-9];
 let items3 = numbers2
                      .filter(value => value >= 0)
                      .map(num => ({vlaue:num}));
    console.log(items3); 












































