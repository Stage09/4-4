// 1-rasm

// 1-misol

// let number = prompt("3 xonali son  kiriting?")
// function cangeNumber(num){
//     const result = num.split("").reverse().join("")
//     console.log(result);

// }
// cangeNumber(number)


// 5-misol

// let obj1 = {id:1}
// let obj2 = {name:"salom"}
// let obj3 = {age:15}

// // let resObj = Object.assign(obj1, obj2, obj3)
// let resObj = {...obj1, ...obj2, ...obj3}
// console.log(resObj);
 

// -------------------------||6-misol||---------------------------

// let xodimlar = {
//     a:2500,
//     b:3600,
//     c:1800
// }
// 1-usul
// function fn(obj){
//     let sum = 0
//     for(let user in obj){
//         sum = sum + obj[user]
//     }
//     console.log(sum);
// }
// fn(xodimlar)

//2-usul
// function fn(obj){
//     let sum = 0
//     const arr = Object.values(obj)
//     for(let user of arr){
//         sum = sum + user
//     }
//     console.log(sum);
// }
// fn(xodimlar)

// 8-misol

// let list = [true, false, null, 2, 5, 4, undefined]
// function fn(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == "undefined") {
//             arr[i] = 0
//         }
//         else {
//             sum += arr[i]
//         }
//     }
//     console.log(sum);
// }
// fn(list)


// -------------------------------"2-rasm"--------------------------

// 1-misol 

// let usersList = [
//     {
//         id:1,
//         name:"Qodir",
//         age:22,
//         hobby:"Football"
//     },
//     {
//         id:2,
//         name:"Adham",
//         age:21,
//         hobby:"Volleybol"
//     },
//     {
//         id:3,
//         name:"Shokir",
//         age:25,
//         hobby:"Basketbol"
//     },
//     {
//         id:4,
//         name:"Ismoil",
//         age:22,
//         hobby:"Football"
//     },
// ]
// function findSameUsers(arr){
//     let list = []
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i].age == arr[j].age && arr[i].hobby == arr[j].hobby){
//                 list.push(arr[i])
//                 list.push(arr[j])
//             }
//         }
//     }
//     console.log(list);
// }
// findSameUsers(usersList)

// 2-misol

// let list = [1,1,2,2,3,3,4,4,5,6,6]
// function fn(arr){
//     let newArr = []
//     for(let num of arr){
//         if(!newArr.includes(num)){
//             newArr.push(num)
//         }
//     }
//     console.log(newArr);
// }
// fn(list)

// 4-misol

// let size = prompt("Size kiriting?") - 0
// let usersName = []

// for(let i = 1; i <= size;i++){
//     let newName = prompt(i + ". ism kiriting")
//     usersName.push(newName)
// }

// let findName = prompt("Ism qidiring?")
// let count = 0
// for(let i = 0; i < usersName.length;i++){
//     if(usersName[i] == findName){
//         count++
//     }
// }
// if(count > 0){
//     console.log(findName)
// }
// else{
//     usersName.push(findName)
//     console.log(usersName);
// }

// 5-masala

// let number = prompt("Son kiritshingiz lozim! : ") -0
// function cangeNumber(num) {
//     const result = [];
//     for (let i = 0; i <= num; i++) {
//         result.push(i);
//     }
//     return result.reverse(); 
// }
// console.log(cangeNumber(number))