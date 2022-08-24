const box = document.querySelector("#box"),
    code = document.querySelector("#code")
const copyButton = document.querySelector(".code button")
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
copyButton.addEventListener("click", () => copy())
function applyValues() {
    const value = `${leftTop.value}px ${rigthTop.value}px ${rightBottom.value}px ${leftBottom.value}px`
    box.style.borderRadius = value
    showCode(value)
}
function showCode(value) {
    code.innerHTML = value
}
function copy() {
    navigator.clipboard.writeText("border-radius: " + code.innerHTML)
}
