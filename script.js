let btn=document.getElementById("btn");
let degree=document.getElementById("temp");
let val=document.getElementById("val");

let celcius=0;
let faren=0;
let kel=0;

let ans1=document.getElementById("ans1");
let ans2=document.getElementById("ans2");
let ans3=document.getElementById("ans3");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    calc();
})

let calc=()=>{
    if(degree.value==="celcius"){
        cel();
    }
    if(degree.value==="farenheit"){
        far();
    }
    if(degree.value==="kelvin"){
        kelvin();
    }
}

let cel=()=>{
    faren=(val.value*1.8)+32;
    kel=val.value+273.15;
    ans1.innerHTML=val.value;
    ans2.innerHTML=faren;
    ans3.innerHTML=kel;
}

let far=()=>{
    celcius=(val.value-32)*(5/9);
    kel=celcius+273.15;
    ans1.innerHTML=celcius;
    ans2.innerHTML=val.value;
    ans3.innerHTML=kel;
}

let kelvin=()=>{
    celcius=val.value-273.15;
    faren=(celcius*1.8)+32;
    ans1.innerHTML=celcius;
    ans2.innerHTML=faren;
    ans3.innerHTML=val.value;
}