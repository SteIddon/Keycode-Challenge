let anyKey = document.getElementById("anykey");
let eventCode = document.getElementById("eventcode");
let eventWhich = document.getElementById("eventwhich");
let eventKey = document.getElementById("eventkey");


addEventListener("keypress", () => {
        anyKey.style.display = "none"
        eventCode.style.display = "block"
        eventWhich.style.display = "block"
        eventKey.style.display = "block"
});