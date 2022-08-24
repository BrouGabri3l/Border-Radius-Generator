const box = document.querySelector("#box")
const corners = document.querySelectorAll(".corner"),
    leftTop = document.querySelector("#left-top"),
    rigthTop = document.querySelector("#right-top"),
    leftBottom = document.querySelector("#left-bottom"),
    rightBottom = document.querySelector("#right-bottom")
for (let index = 0; index < corners.length; index++) {
    corners[index].addEventListener("change", () => {
        applyValues()
    })
}
function applyValues() {
    const value = `${leftTop.value}px ${rigthTop.value}px ${leftBottom.value}px ${rightBottom.value}px`
    box.style.borderRadius = value
}
