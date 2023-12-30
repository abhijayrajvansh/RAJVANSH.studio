const page1Content = document.getElementById("page1Content");
const cursor = document.getElementById('cursor');

page1Content.addEventListener('mousemove', (mousePointerCordinates) => {
    cursor.style.left = mousePointerCordinates.x+"px"
    cursor.style.top = mousePointerCordinates.y+"px"
})