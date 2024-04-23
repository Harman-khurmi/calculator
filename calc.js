let type=document.querySelector("#solve");
let btn=document.querySelectorAll(".btn");
let clear=document.querySelector("#ac");
let del=document.querySelector("#del");
type.innerText="";

let clearall=(button)=>
{
    if(button=="AC")
    {
        type.innerText="";
    }
};
let deletechar=(button,type_content)=>
{
    if(button=="DEL")
    {
        type.innerText=type_content.slice(0, -4);;
    }
}
let docalc=(content,button)=>
{
    if(button==="=")
    {   
        // type.innerText="";
       type.innerText=eval(content.slice(0,-1));
        // type.innerText=eval(content);
       
    }
}

for(let i=0;i<20;i++)
{   
    btn[i].addEventListener("click",()=>
    {
        type.innerText+=btn[i].innerText;
        console.log(`you pressed ${btn[i].innerText}`);
        console.log(`your content is ${type.innerText}`);
        clearall(btn[i].innerText);
        deletechar(btn[i].innerText,type.innerText);
        docalc(type.innerText,btn[i].innerText);
    });
}
