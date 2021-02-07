let anyKey = document.getElementById("anykey");
let eventCode = document.getElementById("eventcode");
let eventWhich = document.getElementById("eventwhich");
let eventKey = document.getElementById("eventkey");

document.addEventListener("keypress", () => {
        anyKey.textContent = ""
});

let lettEr = document.getElementById("letter");
let coDe = document.getElementById("code");
let whiCh = document.getElementById("which");

document.addEventListener("keypress", (event) => {
        eventCode.style.display = "block"
        eventWhich.style.display = "block"
        eventKey.style.display = "block"
        whiCh.textContent = event.which;
        coDe.textContent = event.code;
        lettEr.textContent = event.key;
        anyKey.textContent = event.which;
        anyKey.style.top = "30%";
        anyKey.style.right = "7%";
    });
