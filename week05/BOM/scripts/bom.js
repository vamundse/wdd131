const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const message = document.createElement("span");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener("click", function() {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    const listItem = document.createElement("li");
    const listDelBtn = document.createElement("button");
    listItem.textContent = item;
    listDelBtn.textContent = "x";

    listItem.appendChild(listDelBtn);
    list.appendChild(listItem);

    listDelBtn.addEventListener("click", function() {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}