var icon = document.getElementById("icon");
var sun = document.getElementsByClassName("fa-sun");
var container = document.querySelector(".container");
icon.onclick = function() {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.innerHTML = "<i class='fa-solid fa-moon'></i>";
        container.style.backgroundImage = 'none';
        document.body.style.backgroundColor = "#f8f9fa";
        document.body.style.color = "#e0e0e0";
        icon.style.cursor = "pointer";
    } else {
        icon.innerHTML = "<i class='fa-solid fa-sun'></i>";
        container.style.backgroundImage = 'url(./images/images/background.png)';
    }
}   