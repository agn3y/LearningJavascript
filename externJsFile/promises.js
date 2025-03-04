const resolveBtn = document.querySelector(".approve-button");
const rejectBtn = document.querySelector(".reject-button");

const p = new Promise((resolve,reject)=>{
   
        resolveBtn.onclick = ()=> {
            resolve("Promise was resolved")
        }

        rejecteBtn.onclick= ()=> {
            reject("Promise was rejected")
        }
    }
)

p.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Operation terminated");
})


