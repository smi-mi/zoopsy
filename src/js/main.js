// popup menu
let popupHeaderElement = document.getElementById("popup-header");

popupHeaderElement.onmouseover = function () {
    let popupMenuElement = document.getElementById("popup-menu");
    let popupStyle = popupMenuElement.style;
    popupStyle.display = "flex";
    popupStyle.justifyContent = "space-around";
    popupStyle.backgroundColor = "#FEFDF9";
};

popupHeaderElement.onmouseleave = function () {
    let popupMenuElement = document.getElementById("popup-menu");
    popupMenuElement.style.display = "none";
};
