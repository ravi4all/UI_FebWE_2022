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
    // console.log(this);
    // console.log(this.value);
    var opr = this.value;
    if(opr == "+") {
        var result = parseInt(box_1.value) + parseInt(box_2.value);
    }
    else if(opr == "-") {
        var result = parseInt(box_1.value) - parseInt(box_2.value);
    }
    else if(opr == "/") {
        var result = parseInt(box_1.value) / parseInt(box_2.value);
    }
    else if(opr == "*") {
        var result = parseInt(box_1.value) * parseInt(box_2.value);
    }

    box_3.value = result;
}
