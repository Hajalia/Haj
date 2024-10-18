document.getElementById("animateBtn").addEventListener("click", function() {
    const box = document.getElementById("animatedBox");
    box.style.transform = "translateY(100px)";
    setTimeout(() => {
        box.style.transform = "translateY(0)";
    }, 500);
});
