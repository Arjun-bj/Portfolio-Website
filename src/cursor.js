export const customCursor = () => {
    const cursor = document.querySelector(".cursor");
    let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

    const updatePosition = () => {
        posX += (mouseX - posX) * 1.8; 
        posY += (mouseY - posY) * 1.8;
        cursor.style.transform = `translate3d(${posX - cursor.offsetWidth / 2}px, ${posY - cursor.offsetHeight / 2}px, 0)`;
        requestAnimationFrame(updatePosition);
    };

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.querySelectorAll(".outline-target").forEach(item => {
        item.addEventListener("mouseover", () => {
            cursor.classList.add("cursor-outline");
        });
        item.addEventListener("mouseout", () => {
            cursor.classList.remove("cursor-outline");
        });
    });

    document.querySelectorAll(".filled-target").forEach(item => {
        item.addEventListener("mouseover", () => {
            cursor.classList.add("cursor-filled");
            cursor.innerHTML = "View"
        });
        item.addEventListener("mouseout", () => {
            cursor.classList.remove("cursor-filled");
            cursor.innerHTML = "";
        });
    });
    updatePosition();
};

