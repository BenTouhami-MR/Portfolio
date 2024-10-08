
// -handle Menu button 
const menu = document.getElementById("menu")
const actions = document.getElementById("actions")
const aMenuList = document.querySelectorAll('#actions li a')


menu.addEventListener("click",()=>{
    handleMenu()

})

Array.from(aMenuList).forEach(element =>{
    const windowidth =window.innerWidth
    if (windowidth<=900){
        element.addEventListener("click",()=>{
            // alert(element)
            handleMenu()
        });
    }
});


function handleMenu(){
    // alert("salam")
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
    
}







// handle profile image

const bgImage = document.getElementById("home");

function handleProfilePicture() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1200) {
        bgImage.style.backgroundImage = 'none';
    } else {
        bgImage.style.backgroundImage = 'url(images/bg-image.jpg)';        
    }
}

// Debounce the resize event to optimize performance
let resizeTimer;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleProfilePicture, 200); // Adjust debounce time as needed
});

// Call handleProfilePicture() initially to set the correct image based on window width
handleProfilePicture();


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust this value to fine-tune the scrolling position
                behavior: 'smooth'
            });
        }
    });
});


