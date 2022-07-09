// callback
// Event Binding - Binding an event with function
// function will be called after event is triggered

// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", greet);
// });


window.addEventListener("load", initEvents);
function initEvents() {
    document.getElementById("btn").addEventListener("click", greet);
}

function greet() {
    console.log("Greet Called...");
    var username = document.getElementById("box");
    document.getElementById("output").innerHTML = username.value;
    username.value = "";
}