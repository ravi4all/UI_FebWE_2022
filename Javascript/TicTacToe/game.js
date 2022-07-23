window.addEventListener("load", initEvents);

let table;
var btns;
var counter;
var winning_combinations = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function initEvents() {
    table = document.querySelector("#board");
    document.querySelector("#main-btn").addEventListener("click", showBoard);
}

function showBoard() {
    counter = 0;
    // this.style.display = "none";
    this.innerHTML = "Restart Game...";
    table.innerHTML = "";
    btns = [];
    for(let i = 0; i < 3; i++) {
        var tr = document.createElement("tr");
        for(let j = 0; j < 3; j++) {
            var td = document.createElement("td");
            var btn = document.createElement("button");
            btn.className = "btn";
            btn.addEventListener("click", addUserChoice);
            btns.push(btn);
            // btn.innerHTML = "0";
            tr.appendChild(td);
            td.appendChild(btn);
        }
        table.appendChild(tr);
    }
}

function addUserChoice() {
    let userPos = btns.indexOf(this);
    console.log("User Pos :",userPos);
    if(btns[userPos].innerHTML != "0" && btns[userPos].innerHTML != "X") {
        this.innerHTML = "0";
        counter++;
        checkWinner();
        addCpuChoice();
    }
}

function addCpuChoice() {
    let cpuPos = parseInt(Math.random() * 9);
    console.log("CPU Moved at : ",cpuPos);
    if(counter <= 8) {
        if(btns[cpuPos].innerHTML == "X" || btns[cpuPos].innerHTML == "0") {
            addCpuChoice();
        }
        else {
            btns[cpuPos].innerHTML = "X";
            counter++;
            checkWinner();
        }
    }   
}

function checkWinner() {

}