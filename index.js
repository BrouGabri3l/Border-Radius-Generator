const box = document.querySelector("#box"),
    code = document.querySelector(".code")
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
    const value = `${leftTop.value}px ${rigthTop.value}px ${rightBottom.value}px ${leftBottom.value}px`
    box.style.borderRadius = value
    showCode(value)
}
function showCode(value) {
    const codeText = `border-radius: ${value}`
    code.innerHTML = codeText
}
