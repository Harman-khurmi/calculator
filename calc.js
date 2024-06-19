let type = document.querySelector("#solve");
let btn = document.querySelectorAll(".btn");
let clear = document.querySelector("#ac");
let del = document.querySelector("#del");
let theme = document.querySelector("#theme");
let box = document.querySelector(".box");
type.innerText = "";

// let counter=0;
// theme.addEventListener("click",()=>
// {
//     if(counter===0)
//     {
//     counter++;
//     console.log("hello");
//     box.style.backgroundColor="white";
//     theme.style.backgroundColor="#3F5E5A";
//     btn.style.backgroundColor="#85CB33";
//     type.style.color="#3F5E5A";
// }
// else if(counter===1)
// {
//     counter--;
//     console.log("hello");
//     box.style.backgroundColor="#333934";
//     theme.style.backgroundColor="white";
//     btn.style.backgroundColor="#3F5E5A";
//     btn.style.boxShadow = "0px 0px 20px 0px rgb(19, 167, 93)";
//     type.style.color="#3F5E5A";
// }
// });
let counter = 0;

theme.addEventListener("click", () => {
    if (counter === 0) {
        counter++;
        console.log("hello");
        box.style.backgroundColor = "white";
        theme.style.backgroundColor = "#3F5E5A";
        // btn.style.backgroundColor = "#85CB33";
        type.style.color = "#3F5E5A";
        console.log(counter);
    } else if (counter === 1) {
        console.log("hello");
        box.style.backgroundColor = "#333934";
        theme.style.backgroundColor = "white";
        // btn.style.backgroundColor = "#3F5E5A";
        // btn.style.boxShadow = "0px 0px 20px 0px rgb(19, 167, 93)";
        counter--;
        console.log(counter);
    }
});
let counter2 = 0;
theme.addEventListener("click", () => {
    if (counter2 === 0)
    {
        console.log(counter2);
        type.classList.add('solve-after');
        // type.classList.add('btn-after');
        counter2++;
    }
    else {
        console.log(counter2);
        type.classList.remove('solve-after');
        type.classList.remove('btn-after');
        counter2--;
    }
});

let clearall = (button) => {
    if (button == "AC") {
        type.innerText = "";
    }
};
let deletechar = (button, type_content) => {
    if (button == "DEL") {
        type.innerText = type_content.slice(0, -4);;
    }
}
let docalc = (content, button) => {
    if (button === "=") {
        // type.innerText="";
        type.innerText = eval(content.slice(0, -1));
        // type.innerText=eval(content);

    }
}

for (let i = 0; i < 20; i++) {
    btn[i].addEventListener("click", () => {
        type.innerText += btn[i].innerText;
        console.log(`you pressed ${btn[i].innerText}`);
        console.log(`your content is ${type.innerText}`);
        clearall(btn[i].innerText);
        deletechar(btn[i].innerText, type.innerText);
        docalc(type.innerText, btn[i].innerText);
    });
}

