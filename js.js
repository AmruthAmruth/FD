
const promise1=new Promise((resolve,reject)=>{
    return resolve("Hello promise")
})


promise1.then((data)=>{
    console.log(data);
    
})