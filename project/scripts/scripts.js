const hamButton = document.querySelector("#burgermenu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});