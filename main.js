document.querySelector(".control-button span").onclick = function() {

    let yourName = prompt("what's your Name?");

    if(yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = "unknown";
    } else {
        document.querySelector(".name span").innerHTML = yourName;
    }

    document.querySelector(".control-button").remove();
};

let duration = 1000;
let blockCountainer = document.querySelector(".Memory-Game-block");
let blocks = Array.from(blockCountainer.children);
let orderRange = [...Array(blocks.length).keys()];
console.log(orderRange);