var p1 = document.createElement("p");
p1.setAttribute("id","p1");
p1.setAttribute("style","text-align:center; margin-top:20%; font-size:70px;");

var count = 10;
setTimeout(() =>{
    p1.innerHTML = count;
    setTimeout(() =>{
        count--;
        p1.innerHTML = count;
        setTimeout(() =>{
            count--;
            p1.innerHTML = count;
            setTimeout(() =>{
                count--;
                p1.innerHTML = count;
                setTimeout(() =>{
                    count--;
                    p1.innerHTML = count;
                    setTimeout(() =>{
                        count--;
                        p1.innerHTML = count;
                        setTimeout(() =>{
                            count--;
                            p1.innerHTML = count;
                            setTimeout(() =>{
                                count--;
                                p1.innerHTML = count;
                                setTimeout(() =>{
                                    count--;
                                    p1.innerHTML = count;
                                    setTimeout(() =>{
                                        count--;
                                        p1.innerHTML = count;
                                        setTimeout(() =>{
                                            p1.innerHTML = "Happy Independence Day!!";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

document.body.append(p1);
