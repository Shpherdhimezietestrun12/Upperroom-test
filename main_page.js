// Target specific width of differnt screens without any problem or issue 
const width = window.innerWidth;
const isAndroid = /Android/i.test(navigator.userAgent);


if (isAndroid && width <= 768) {
    // Load a differnt Html file or content for Android devices with a width of 768px or less 

    document.write('./For Phone/Home_page.html'); // This is the html file it will load on it if possible 
} else {
    // Load a default html file 
    document.write('./For Phone/Home_page.html');
}










// this is for the first function that I called which is for the image changing...
const images = [
    "./Pictures/test_seven.webp", //  this is the default image 
    "./Pictures/test_six.webp", // second image
    "./Pictures/test_play.webp", // third image
    "./Pictures/test_five.webp", // fourth image
];


let currentIndex = 0; // Start with the first image

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    document.querySelector('.place-three').src = images[currentIndex]; // Change the src attribute
}


// Change image for every 3 seconds(3000 miliseconds)
setInterval(changeImage, 10000);



// this is for the image list of another design
let currentIndexTwo = 0;
// Also this is for the sliding of the image 
const images_list = document.querySelectorAll('.place-six li');
const totalImages = images.length;

function slideImges() {
    // this is the function placement 
    currentIndexTwo = (currentIndexTwo + 1) % totalImages; // Cycle through images 
    const offset = -currentIndexTwo * 100; // Calculate offset
    document.getElementById('image-slider').style.transform = `translateX(${offset}%)`;
}
setInterval(slideImges, 3000); // Change images for every 10 seconds
