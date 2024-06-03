"use strict";
// // 1) Declaring objects
Object.defineProperty(exports, "__esModule", { value: true });
let obj1 = {
    student_id: 3232,
    name: "Danish",
    teacher_Id: 7873,
    teacher_name: "Habib",
};
console.log(obj1.teacher_Id);
console.log(obj1.name);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Union Types
// union types in typesscript allow you to declare a type that can hold values of multiple Types.
// They are expressed using pipe "|" chracter b/w SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX
// 1 ) Basic union types
// let Name: string | number | boolean
// name: "Danish";
// name: 30;
// name: true;
// 2) Array with a union type
// let myArray: (string | number | boolean) [] = ["apple","banaban","Mango"];
// console.log(myArray);
// myArray.push("Lichi");
// myArray.push(45)
// myArray.push(true)
// console.log(myArray);
// [ 'apple', 'banaban', 'Mango' ]
// [ 'apple', 'banaban', 'Mango', 'Lichi', 45, true ]
// 3) Function with a parameter union type
//     function myfun(input:string | number | boolean){
//         console.log(input);
//     }
//    // Call function with a argument string
//     myfun("Danish")     // Danish
//     // Call function with a argument number
//     myfun(100)          // 100
//     // Call function with a argument boolean
//     myfun(true)         // True
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nested object
// type data ={
//    name: {
//     fName: string,
//     lName: string
//   },
//   id:number,
//   isStudent: true
// }
// let student1:data = {
//     name: {
//         fName: "Danish Habib",
//         lName: "chauhan"
//     },
//     id: 5122,
//     isStudent: true
// }
// let student2:data = {
//     name: {
//         fName: "Aiza Danish",
//         lName: "chauhan"
//     },
//     id: 5123,
//     isStudent: true
// }
// console.log(student1);              // { name: { fName: 'Danish Habib', lName: 'chauhan' },   id: 5122,isStudent: true }
// console.log(student2);              // { name: { fName: 'Aiza Danish', lName: 'chauhan' },  id: 5123,isStudent: true}
// // nested object
// type persontype ={
//     name:{
//         fname:string,
//         lname:string
//     };
//    age:number
// }
// let person: persontype= {
//     name:{
//         fname :"danish",
//         lname:"habib"
//     },
// age:30,
// }
// console.log(person);            //   { name: { fname: 'danish', lname: 'habib' }, age: 30 }
// // Nested object
// type Author = {
//     firstName: string;
//     lastName: string;
// };
// type Book = {
//     author: Author;
//     name: string;
// };
// let myBook : Book = {
//     author: {
//         firstName: "Danish",
//         lastName: "Chauhan"
//     },
//     name: "My Best Book"
// }
// console.log(myBook);       //  { name: { fname: 'danish', lname: 'habib' }, age: 30 }
//                            //  {author: { firstName: 'Danish', lastName: 'Chauhan' },
//                            //   name: 'My Best Book'}
