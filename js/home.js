const linkList = document.getElementById("linkList")
const header = document.getElementById("header")
document.getElementById("listBtn").addEventListener("click", function () {
    if (linkList.style.height == "58vh") {
        linkList.style.height = 0
        header.style.boxShadow = "none";
    }
    else {
        linkList.style.height = "58vh"
        header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }
});

let days = document.getElementById("days")
days.innerText = Math.floor(((new Date() - new Date("2022/08/19")) / (1000 * 3600 * 24) + 1)) + " days"