let count = 0;

let heading = document.getElementById("count");
let inc_Btn = document.getElementById("increase");
let dec_Btn = document.getElementById("decrease");
let rst_Btn = document.getElementById("reset");

inc_Btn.addEventListener("click", function(){
    count++;
    heading.innerText = count;
})

dec_Btn.addEventListener("click", function(){
    if(count==0)
    {
        count=0;
    }
    else{
        count--;
    }
    
    heading.innerText = count;
})

rst_Btn.addEventListener("click", function(){
    count=0;
    heading.innerText = count;
})
