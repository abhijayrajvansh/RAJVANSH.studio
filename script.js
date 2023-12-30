const page1Content = document.getElementById("page1Content");
const cursor = document.getElementById('cursor');

page1Content.addEventListener('mouseenter', (scale) => {
    gsap.to(cursor, {
        scale:1
    })
})

page1Content.addEventListener('mousemove', (mousePointerCordinates) => {
    gsap.to(cursor, {
        x:mousePointerCordinates.x, y: mousePointerCordinates.y
    })
})

page1Content.addEventListener('mouseleave', (scale) => {
    gsap.to(cursor, {
        scale:0
    })
})