//named export

// import { usersData as sitcom, agneyBhai } from "./importAndExportFiles/userData.js";
import { products } from "./importAndExportFiles/productData.js";


//default import // here we can use any name we want

import accesories, {myData} from "./importAndExportFiles/accesories.js";
// import SpongeBob  from "./importAndExportFiles/accesories.js";

//import everything in once
import *as everything from "./importAndExportFiles/userData.js";

// console section

// console.log(sitcom , agneyBhai); // users data named import-export
// console.log(products[0]); // productsData named as products, named export method

// console.log(accesories) // default export method 
// console.log(myData());
// console.log(SpongeBob) // default export method 

console.log(everything);