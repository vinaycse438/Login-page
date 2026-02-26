let container = document.querySelector(".container");
let box2 = document.querySelector(".box2");

box2.addEventListener("click", () => {

    if (container.style.flexDirection === "row-reverse") {
        container.style.flexDirection = "row";
    } else {
        container.style.flexDirection = "row-reverse";
    }

});