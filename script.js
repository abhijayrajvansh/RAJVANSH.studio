const page1Content = document.getElementById("page1Content");
const cursor = document.getElementById('cursor');

page1Content.addEventListener('mousemove', (mousePointerCordinates) => {
    gsap.to(cursor, {
        x:mousePointerCordinates.x, y: mousePointerCordinates.y
    })
})