



// // 1) Declaring objects

// // Object can be declared using curly Barckets { };

// let personDetails = {
//     Name: "Muhammmad Danish",         // Key:Name , Value: Muhammad Danish
//     Country: "Pakistan",
//     isLoggedIn: true,
//     RollNo: 22345
// };
// console.log(personDetails);          //  { Name: 'Muhammmad Danish',Country: 'Pakistan',
//                                      //   isLoggedIn: true,  RollNo: 22345 }



// Defining type of an object

// let personDetails1:{
//     Name: string,
//     Country: string,
//     isLoggedIn: boolean,
//     RollNo: number,
//     city: string
// } = {
//     Name: "Muhammmad Danish",
//     Country: "Pakistan",
//     isLoggedIn: true,
//     RollNo: 22345,
//     city: "karachi"
// };
// console.log(personDetails1);        //  { Name: 'Muhammmad Danish',Country: 'Pakistan',
//                                    //   isLoggedIn: true,  RollNo: 22345,  city: 'karachi'}
    




//2 ) Accessing Object Properties

// let personDetails:{
//     Name: string,
//     Country: string,
//     isLoggedIn: boolean,
//     RollNo: number,
//     city: string
// } = {
//     Name: "Muhammmad Danish",
//     Country: "Pakistan",
//     isLoggedIn: true,
//     RollNo: 22345,
//     city: "karachi"
// };

// //i) Using dot notation

//  console.log(personDetails.Name);     // Muhammmad Danish



// // ii) Using Bracket notation

//  console.log(personDetails["Name"]);    //  Muhammmad Danish








// //  iii) Using object.keys()

// console.log(Object.keys(personDetails))  // ['Name', 'Country', 'isLoggedIn', 'RollNo', 'city']



//  // iv) Using object.values()

//  console.log(Object.values(personDetails));//['Muhammmad Danish','Pakistan',true,22345,'karachi']


// // v) Using object.entries()

// console.log(Object.entries(personDetails));  // ['Name,'Muhammmad Danish'],['Country','Pakistan'],
// //                                  [ 'isLoggedIn', true ],['RollNo',22345 ],[ 'city','karachi']













// 3) Adding Properties

// let personDetails:{
//          Name: string,
//          Country: string,
//          isLoggedIn: boolean,
//          RollNo: number,
//          city: string
//          Gender?:string               // Optional parameter
// } = {
//     Name: "Muhammmad Danish",
//     Country: "Pakistan",
//     isLoggedIn: true,
//     RollNo: 22345,
//     city:"Karachi",
    
// };

// console.log(personDetails); 

//  personDetails.Gender ="Male";    
                                   
// console.log(personDetails);     // { Name: 'Muhammmad Danish',Country: 'Pakistan', 
//                              isLoggedIn: true, RollNo: 22345,city: 'Karachi', Gender: 'Male'}


    // 4) Modifying Properties                                

    //  let personDetails = {
    //         Name: "Muhammmad Danish",
    //         Country: "Pakistan",
    //         isLoggedIn: true,
    //         RollNo: 22345
    //     };
        
    //     console.log(personDetails); 

    //     personDetails.Name = "Habib ur Rehman" 

    //     console.log(personDetails);       
        
        // {
        //     Name: 'Habib ur Rehman',
        //     Country: 'Pakistan',
        //     isLoggedIn: true,
        //     RollNo: 22345
        //   }



        

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// Interface

// interface student  {
//         Name: string,
//         Age: number,
//         Gender: string,
//         RollNo: number,
//         Subject: string[],
//         Country: string
    
//     }
    
//     let student1:student = {
//             Name:"Danish",
//             Age: 25,
//             Gender: "Male",
//             RollNo: 45454,
//             Subject: ["Science","Physics","Chemistry"],
//             Country:"Pakistan",

//         }



//         let student2:student = {
//             Name:"Zahid",
//             Age: 30,
//             Gender: "Male",
//             RollNo: 45455,
//             Subject: ["Science","Physics","Chemistry"],
//             Country:"Pakistan",

//         }
//         let student3:student = {
//             Name:"Shahid",
//             Age: 27,
//             Gender: "Male",
//             RollNo: 45456,
//             Subject: ["Science","Physics","Chemistry"],
//             Country:"Pakistan",

//         }

//         console.log(student1);
//         console.log(student2);
//         console.log(student3);
        
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Type Alias

// type student = {
//     Name: string,
//     Age: number,
//     Gender: string,
//     RollNo: number,
//     Subject: string[],
//     Country: string

//  }

//         let student1:student = {
//             Name:"Danish",
//             Age: 25,
//             Gender: "Male",
//             RollNo: 45454,
//             Subject: ["Science","Physics","Chemistry"],
//             Country:"Pakistan",
//   }





//         let student2:student = {
//             Name:"Zahid",
//             Age: 30,
//             Gender: "Male",
//             RollNo: 45455,
//             Subject: ["Science","Physics","Chemistry"],
//             Country:"Pakistan",

//         }
//         let student3:student = {
//             Name:"Shahid",
//             Age: 27,
//             Gender: "Male",
//             RollNo: 45456,
//             Subject: ["Science","Physics","Chemistry"],
//             Country:"Pakistan",

//         }

//         console.log(student1);
//         console.log(student2);
//         console.log(student3);
        


        //////////////////////////////////////////////////////////////////////////////////////////////////////


 
        // Intersection Types ( Combining Types)


        // Combinbig existing types to create a new type, a type that has all features
        // of the type you combine.
        
        // The & Operator is used to create an intersection type.


//     interface person {
//     name : string,
//     age: number
// }

//     interface status {
//     isloggedIn : true,
//     adress : string,
// }
// // to solve these issue we use intersection type

// type intersectedtype = person & status;

// let personInfo = {
//     name : "Zaffar",
//     isloggedIn : true,
//     age: 18,
//     adress: "karachi"
// }
// console.log(personInfo);

// // { name: 'Zaffar', isloggedIn: true, age: 18, adress: 'karachi' }

// Example 2

interface Student {
    student_id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}
    
type intersected_type = Student & Teacher;
    
let obj1: intersected_type = {
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





