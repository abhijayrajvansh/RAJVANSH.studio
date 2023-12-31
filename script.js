const cusrsorEffect = () => {
    const page1Content = document.getElementById("page1Content");
    const cursor = document.getElementById('cursor');

    page1Content.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale:1
        })
    })

    page1Content.addEventListener('mousemove', (mousePointerCordinates) => {
        gsap.to(cursor, {
            x:mousePointerCordinates.x, y: mousePointerCordinates.y
        })
    })

    page1Content.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale:0
        })
    })
}

cusrsorEffect()