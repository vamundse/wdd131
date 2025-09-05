const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const message = document.createElement("span");

button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        const listItem = document.createElement("li");
        const listDelBtn = document.createElement("button");
        listItem.textContent = input.value;
        listDelBtn.textContent = "x";

        listItem.appendChild(listDelBtn);
        list.appendChild(listItem);

        list.removeChild(message);

        listDelBtn.addEventListener("click", function() {
            list.removeChild(listItem);
        });

        input.value = "";
        input.focus();
        

    } else {
        message.textContent = "You cannot leave it blank!";
        message.style.color = "red";
        list.appendChild(message);
    }
    
});