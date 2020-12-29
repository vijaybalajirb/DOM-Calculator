let top_nav = document.createElement("nav");
top_nav.classList.add("navbar");
top_nav.classList.add("navbar-light");
top_nav.classList.add("bg-light");

let title = document.createElement("span");
title.innerHTML = "Calculator";
title.style.fontSize = "1.9rem";
top_nav.appendChild(title);

let main_container = document.createElement("div");
main_container.classList.add("container-flex");
main_container.classList.add("mt-5");

let row = document.createElement("div");
row.classList.add("row");
row.style.margin = "0";

let col = document.createElement("div");
col.classList.add("col-lg-6", "col-12");
col.classList.add("offset-lg-3");
row.appendChild(col);

let col2 = document.createElement("div");
col2.classList.add("col-lg-3", "col-12");

row.appendChild(col2);
main_container.appendChild(row);

let row_1 = document.createElement("div");
row_1.classList.add("row");

let col_1 = document.createElement("div");
col_1.classList.add("col-12");

let tarea = document.createElement("input");
tarea.setAttribute("type", "text");
tarea.classList.add("form-control");
tarea.classList.add("text-right");
tarea.classList.add("mb-4");
tarea.setAttribute("id", "type-area");
tarea.setAttribute("readonly", "true");
tarea.setAttribute("placeholder", "0");
tarea.style.fontSize = "20px";
tarea.style.borderRadius = "8px";
tarea.style.padding = "15px 5px";
tarea.style.lineHeight = "14px";
tarea.style.border = "1px solid black";
col_1.append(tarea);


let col_2 = document.createElement("div");
col_2.classList.add("col-12", "mb-4");

function addText(event) {
    let targ = event.target || event.srcElement;
    document.getElementById("type-area").value += targ.textContent || targ.innerText;
}

function numberCreate(value, color, id){
    let number_ = document.createElement("div");
    if(value == "="){
        number_.classList.add("col-6");
    }else{
        number_.classList.add("col-3");
    }
    number_.style.display = "inline-block";
    let number = document.createElement("input");
    number.setAttribute("type", "button");
    number.setAttribute("value", value);
    number.setAttribute("id", id);
    number.innerHTML = value;
    number.onclick = function() {addText(event);};
    number.classList.add("btn");
    number.classList.add(color);
    number.style.height = "75%";
    number.style.width = "75%";
    number.style.fontSize = "1.5vw";
    number.style.borderRadius = "5px";
    number_.appendChild(number);
    return number_;
}

let n7 = numberCreate("7", "btn-secondary", "seven");
let n8 = numberCreate("8", "btn-secondary", "eight");
let n9 = numberCreate("9", "btn-secondary", "nine");
let n_mod = numberCreate(" % ", "btn-success", "n_mod");

col_2.append(n7, n8, n9, n_mod);

let col_3 = document.createElement("div");
col_3.classList.add("col-12", "mb-4");

let n4 = numberCreate("4", "btn-secondary", "four");
let n5 = numberCreate("5", "btn-secondary", "five");
let n6 = numberCreate("6", "btn-secondary", "six");
let n_div = numberCreate(" / ", "btn-success", "n_div");

col_3.append(n4, n5, n6, n_div);

let col_4 = document.createElement("div");
col_4.classList.add("col-12", "mb-4");

let n1 = numberCreate("1", "btn-secondary", "one");
let n2 = numberCreate("2", "btn-secondary", "two");
let n3 = numberCreate("3", "btn-secondary", "three");
let n_mul = numberCreate(" * ", "btn-success", "n_mul");

col_4.append(n1, n2, n3, n_mul);

let col_5 = document.createElement("div");
col_5.classList.add("col-12", "mb-4");

let n_dot = numberCreate(".", "btn-secondary", "n_dot");
let n0 = numberCreate("0", "btn-secondary", "zero");
let n_add = numberCreate(" + ", "btn-success", "n_add");
let n_sub = numberCreate(" - ", "btn-success", "n_sub");

col_5.append(n_dot, n0, n_add, n_sub);

let col_6 = document.createElement("div");
col_6.classList.add("col-12", "mb-4");

let n_ce = numberCreate("CE", "btn-danger", "n_ce");
let n_back = numberCreate("\u232b", "btn-warning", "n_back");
let n_eval = numberCreate("=", "btn-info", "n_eval");

col_6.append(n_ce, n_back, n_eval);

window.onload=function(){
    let input = document.getElementById("type-area");
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 48 || event.keyCode === 96) {
            event.preventDefault();
            document.getElementById("zero").click();
        }
        if (event.keyCode === 49 || event.keyCode === 97) {
            event.preventDefault();
            document.getElementById("one").click();
        }
        if (event.keyCode === 50 || event.keyCode === 98) {
            event.preventDefault();
            document.getElementById("two").click();
        }
        if (event.keyCode === 51 || event.keyCode === 99) {
            event.preventDefault();
            document.getElementById("three").click();
        }
        if (event.keyCode === 52 || event.keyCode === 100) {
            event.preventDefault();
            document.getElementById("four").click();
        }
        if (event.keyCode === 53 || event.keyCode === 101) {
            event.preventDefault();
            document.getElementById("five").click();
        }
        if (event.keyCode === 54 || event.keyCode === 102) {
            event.preventDefault();
            document.getElementById("six").click();
        }
        if (event.keyCode === 55 || event.keyCode === 103) {
            event.preventDefault();
            document.getElementById("seven").click();
        }
        if(event.keyCode === 56 || event.keyCode === 104) {
            event.preventDefault();
            document.getElementById("eight").click();   
        }
        if(event.keyCode === 57 || event.keyCode === 105) {
            event.preventDefault();
            document.getElementById("nine").click();   
        }
        if (event.keyCode === 190 || event.keyCode === 110) {
            event.preventDefault();
            document.getElementById("n_dot").click();
        }
        if (event.keyCode === 191 || event.keyCode === 111) {
            event.preventDefault();
            document.getElementById("n_div").click();
        }
        if (event.keyCode === 106) {
            event.preventDefault();
            document.getElementById("n_mul").click();
        }
        if (event.keyCode === 187 || event.keyCode === 107) {
            event.preventDefault();
            document.getElementById("n_add").click();
        }
        if (event.keyCode === 189 || event.keyCode === 109) {
            event.preventDefault();
            document.getElementById("n_sub").click();
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            document.getElementById("n_back").click();
        }
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("n_eval").click();
        }
    });
    let backspace = document.getElementById("n_back");
    let evaluation = document.getElementById("n_eval");
    let clear = document.getElementById("n_ce");
    let typeArea = document.getElementById("type-area");

    backspace.onclick = function() {
        if (typeArea.value[typeArea.value.length - 1] != " ") {
            typeArea.value = typeArea.value.substring(0, typeArea.value.length - 1);
        }else{
            typeArea.value = typeArea.value.substring(0, typeArea.value.length - 2);
        }
    };
    evaluation.onclick = function() {
        if (typeArea.value){
            typeArea.value = typeArea.value.substring(typeArea.value.lastIndexOf("=") + 1);
            typeArea.value = typeArea.value + " = " + eval(typeArea.value);
        }
    };
    clear.onclick = function() {
        typeArea.value = "";
    };
};

col.append(row_1);
row_1.append(col_1, col_2, col_3, col_4, col_5, col_6);
document.body.append(top_nav, main_container);