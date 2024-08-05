export const customCursor = () => {
    const cursor = document.querySelector(".cursor");
    let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

    const updatePosition = () => {
        posX += (mouseX - posX) * 1.8;  // Adjust the multiplier for more or less smoothness
        posY += (mouseY - posY) * 1.8;
        // cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        cursor.style.transform = `translate3d(${posX - cursor.offsetWidth / 2}px, ${posY - cursor.offsetHeight / 2}px, 0)`;
        requestAnimationFrame(updatePosition);
    };

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    updatePosition();
};
// export const customCursor = () => {
//     const cursor = document.querySelector(".cursor");
//     let mouseX = 0, mouseY = 0;
//     const updatePosition = () => {
//         cursor.style.left = mouseX + "px";
//         cursor.style.top = mouseY + "px";
//         cursor.style.transform = `translate(-50%, -50%)`;
//     };

//     const onMouseMove = (e) => {
//         mouseX = e.clientX;
//         mouseY = e.clientY;
//         updatePosition();
//     };

//     document.addEventListener("mousemove", onMouseMove);

//     // Optional: Add or remove the 'expanded' class on hover
//     document.addEventListener("mouseover", (e) => {
//         if (e.target.tagName === "A") {
//             cursor.classList.add("expanded");
//         }
//     });

//     document.addEventListener("mouseout", (e) => {
//         if (e.target.tagName === "A") {
//             cursor.classList.remove("expanded");
//         }
//     });
// };
