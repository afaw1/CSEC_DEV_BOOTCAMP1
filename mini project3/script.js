function toggleStatus() {
    const h = document.querySelector(".head h1");
    
    if (h.textContent === "OFF") {
        h.textContent = "ON";
    } else {
        h.textContent = "OFF";
    }
}

const b = document.getElementById("btn");
b.addEventListener("click", toggleStatus);