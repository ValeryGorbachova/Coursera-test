document.addEventListener("DOMContentLoaded", function() {
    let labels = document.querySelectorAll(".label");
    let maxWidth = 0;


    labels.forEach(label => {
        if (label.offsetWidth > maxWidth) {
            maxWidth = label.offsetWidth;
        }
    });


    labels.forEach(label => {
        label.style.width = maxWidth + "px";
    });
});