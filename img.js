let scrollContainer = document.querySelector(".gallery");
let backBtn = document.querySelector("#backbtn");
let nextBtn = document.querySelector("#nextbtn");

// Handle wheel scroll
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

// Handle next button click
nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
});

// Handle back button click
backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
});

// Automatic scrolling
let autoScrollInterval = setInterval(() => {
    scrollContainer.scrollLeft += 900;
    // If at the end, scroll back to the start
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
    }
}, 3000); // Change every 3 seconds

// Pause auto scroll on mouse enter, resume on mouse leave
scrollContainer.addEventListener("mouseenter", () => {
    clearInterval(autoScrollInterval);
});
scrollContainer.addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(() => {
        scrollContainer.scrollLeft += 900;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
        }
    }, 3000);
});
