let showcase = document.getElementById("showcase");
let i = 0;
let time = 3000;


let slideshowImages = ['url(.././website/resources/images/1.jpg)', 'url(.././website/resources/images/2.jpg)','url(.././website/resources/images/3.jpg)'];

function slideshow() {
    if(i <= 2)
    {
        showcase.style.backgroundImage = slideshowImages[i];
        showcase.style.backgroundImage.transition = "background-color 0.6s ease";
        transition: 
        i++;
    }
    else
    {
        i = 0;
    }
    setTimeout("slideshow()", time);
}

window.onload = slideshow();


