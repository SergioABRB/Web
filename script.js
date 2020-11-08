const button = document.getElementById("trigger-modal");
const dialog = document.getElementById("modal");
const result = document.getElementById("result");

button addEventListener("click", function() {
dialog.showModal();
});

dialog.addEventListener("close", function() {
    result.innerText = dialog.returnValue;
});