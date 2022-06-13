const btn=document.getElementById("btn")
btn.addEventListener("click",findRes)

function findNum(n){
    return new Promise(function (resolve,reject){
        if(!isNaN(n)){
            return resolve("number")
    }else{
        return reject("not a number")
    }
});
}
async function findRes(){
    const n=document.getElementById("txt").value
    try{
        const res=await findNum(n);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
// findRes(n)
