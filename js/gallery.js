// STEP 1: Initialize and declare variables
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

/* STEP 2: Loop 5 times to create the <img> elements */
for (let i = 1; i < 6; i++) {
    let newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
}

/* STEP 4: Function to change the src of the main <img> */
function displayImage(value) {
    displayedImage.setAttribute('src', value);
}

/* STEP 5: Event Delegation */
thumbBar.addEventListener('click', function (event) {
    // event.target is the element that was clicked
    if (event.target && event.target.nodeName === 'IMG') {
        let imgSrc = event.target.getAttribute('src');
        displayImage(imgSrc);

        // Lab 6 STEP G: Call the clearWayfinding() function
        clearWayfinding();

        // Lab 6 STEP A: Change the clicked thumbnail's CSS properties
        event.target.style.outline = '5px solid red';
        event.target.style.position = 'relative';
        event.target.style.zIndex = '10';
    }
});

// Lab 6 STEP D: Initialize and declare a var called 'thumbImgs'
const thumbImgs = document.querySelectorAll('.thumb-bar img');

// Lab 6 STEP E: Build a function called 'clearWayfinding()'
function clearWayfinding() {
    // Lab 6 STEP F: Loop through the thumbImgs array
    for (let i = 0; i < thumbImgs.length; i++) {
        // Reset CSS properties for each thumbnail image
        thumbImgs[i].style.outline = 'none';
        thumbImgs[i].style.position = 'static';
        thumbImgs[i].style.zIndex = '0';
    }
}

// This page inspired by and adapted from...
