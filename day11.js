// function sum(a,b){
//     console.log(a+b);
// }

// function diff(a,b){
//     console.log(a-b);
// }
// function mul(a,b){
//     console.log(a*b);
// }
// function div(a,b){
//     console.log(a/b);
// }
// function mod(a,b){
//     console.log(a%b);
// }
// function calculator(a,b,cb){
    
//     setTimeout(() =>{
//         cb(a,b);
//     },3000);
// }

// calculator(4,2,sum);
// calculator(4,2,diff);
// calculator(4,2,mul);
// calculator(4,2,div);
// calculator(4,2,mod);

// console.log("app start");

// console.log("app process");
// setTimeout(() => {
//  var tt = prompt("Enter a value");
//  console.log(tt);
// },1000);

// console.log("app ends");

var p1 = document.createElement("p");
p1.setAttribute("id","p1");
p1.setAttribute("style","text-align:center; margin-top:20%; font-size:70px;");
// var p2 = document.createElement("p");


function display(num){
    console.log(num);
    p1.innerHTML = num;
    
}

function countdown(cb,num){
   setTimeout(()=>{
       cb(num);
       num=num-1;
   },1000);
   setTimeout(()=>{
    cb(num);
    num=num-1;
},2000);
setTimeout(()=>{
    cb(num);
    num=num-1;
},3000);

setTimeout(()=>{
    cb(num);
    num=num-1;
},4000);

setTimeout(()=>{
    cb(num);
    num=num-1;
},5000);

setTimeout(()=>{
    cb(num);
    num=num-1;
},6000);

setTimeout(()=>{
    cb(num);
    num=num-1;
},7000);

setTimeout(()=>{
    cb(num);
    num=num-1;
},8000);

setTimeout(()=>{
    cb(num);
    num=num-1;
},9000);

setTimeout(()=>{
    cb(num);
    num=num-1;
},10000);

setTimeout(()=>{
    cb("Happy Independence Day!!");

},11000);
}

document.body.append(p1);
countdown(display,10);