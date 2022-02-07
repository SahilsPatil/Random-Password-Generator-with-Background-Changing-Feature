let pass = document.getElementById("pass");
let main = document.getElementById("main");
let iccolor = document.getElementById("ccolor");
let p1 = document.getElementById("p1");
let h1 = document.getElementById("h1");


function generate() {
    pass.innerHTML = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);
}


function a() {
    main.style.backgroundColor = "rgb(128, 0, 0)";
}
function b() {
    main.style.backgroundColor = "rgb(0, 128, 11)";
}
function c() {
    main.style.backgroundColor = "rgb(0, 122, 128)";
}
function d() {
    main.style.backgroundColor = "rgb(15, 0, 128)";
}
function e() {
    main.style.backgroundColor = "rgb(128, 0, 105)";
}


iccolor.addEventListener("input", () => {
    if (iccolor.value == "#000000") {
        p1.style.color = "white";
    }
    else if (iccolor.value=="rgb(186, 206, 6)" || iccolor.value== "rgb(166, 184, 0") {
        h1.style.color="White";
    }
    else {
        main.style.backgroundColor = iccolor.value;
    }
})

function copy() {
    console.log(pass.innerText);
 
}