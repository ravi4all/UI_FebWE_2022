window.addEventListener("load", initEvents);

function initEvents() {

    var box_1 = document.getElementById("box_1");
    var box_2 = document.getElementById("box_2");
    var box_3 = document.getElementById("box_3");

    var add_btn = document.getElementById("add");
    add_btn.addEventListener("click", add);

    var sub_btn = document.getElementById("sub");
    sub_btn.addEventListener("click", sub);

    var div_btn = document.getElementById("div");
    div_btn.addEventListener("click", div);

    var mul_btn = document.getElementById("mul");
    mul_btn.addEventListener("click", mul);
}

function add() {
    var result = parseInt(box_1.value) + parseInt(box_2.value);
    box_3.value = result;
}

function sub() {
    var result = parseInt(box_1.value) - parseInt(box_2.value);
    box_3.value = result;
}

function div() {
    var result = parseInt(box_1.value) / parseInt(box_2.value);
    box_3.value = result;
}

function mul() {
    var result = parseInt(box_1.value) * parseInt(box_2.value);
    box_3.value = result;
}