const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    const addroundom = getaddroundom();

    document.body.style.background = colors[addroundom];
    color.textContent = colors[addroundom];

});

function getaddroundom() {
    return Math.floor(Math.random() * colors.length);
}