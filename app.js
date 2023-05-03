// --------------------------------------Class-1----------------------------------------------------



// var fname = 'Saad'
// fname = 'Ali'
// console.log(fname)


// let fname = 'Saad'
// fname = 'Ali'
// console.log(fname)


// if(true){
//     var a = 45
// }
// console.log(a)

// a = 5;
// var a;
// console.log(a)
// foo()

// function foo(){
//     alert('hello world')
// }

// const fname = 'Saad'
// fname = 'Ali'
// console.log(fname)

// const obj = {
//     fanme: 'Saad',
//     roll_no: 123
// }

// obj.fanme = 'Ali'

// console.log(obj.fanme)

// const arr = ['Ali','Hamza']
// arr = ['Hamzaaa','Hadi']
// console.log(arr)

// arr[1] = 'Jalal'
// console.log(arr)








// --------------------------------------Class-2----------------------------------------------



// -------------------------template literals----------------------------



// let fname = 'Saad'
// let lname = 'Ali'
// document.write('My first name is '+fname+' and my last name is '+lname+"<br>")

// document.write(`My first name is ${fname} and <br> my last name is ${lname}`)





// --------------------------destructuring---------------------------




// let arr = ['Saad','Ali','Hamza','Jalal']

// let [a,b,c,d] = arr

// a = 'Kangaro'

// document.write(a)


// document.write(c)


// let obj = {
//     name: 'Saad',
//     age: 12,
//     roll: 244
// }

// let { name, age, roll } = obj
// document.write(age)





// -------------------------------default parameters----------------------




// function foo(a=6,b=10){
//     return a + b
// }
// document.write(foo(2,2))

// spread operators

// let obj = {
//     name: 'Saad',
//     age: 12,
//     roll: 244
// }

// let obj1 = {
//     ...obj,
//     sec: 'A'
// }

// console.log(obj)


// arrow functions

// function foo(a){
//     return a+ b
// }
// foo()

// let foo = a => a

// alert(foo())





// ======================================== Promises ========================================




// let a = new Promise((res, rej) => {
//   let relation = prompt("Enter your age");
//   if (relation >= 18 && relation <= 100) {
//     res("han shaadi hogai");
//   } else {
//     rej("katt gaya");
//   }
// })
//   .then((data) => {
//     swal(data);
//   })
//   .catch((err) => {
//     swal(err);
//   });