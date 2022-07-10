window.addEventListener("load", initEvents);

function initEvents() {

    var box_1 = document.querySelector("#box_1");
    var box_2 = document.querySelector("#box_2");
    var box_3 = document.querySelector("#box_3");

    var btns = document.querySelectorAll("button");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",calc);
    }
    
}

function calc() {
    var opr = this.value;
    var fnum = box_1.value;
    var snum = box_2.value;
    var expression = fnum + opr + snum;
    box_3.value = eval(expression);
}
