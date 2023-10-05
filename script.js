
// Product Slider
// let box = document.querySelector('.product-container');
const btnpressprev = (box) => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - (width / 4) * 3;
    // console.log(width)
}
const btnpressnext = (box) => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + (width / 4) * 3;
    // console.log(width)
}

// Product Slider End



// Image Viewer
let imgView = document.getElementById('imageView');
let imageToshow = document.getElementById('imageDis');
function show(pic) {
    imgView.style.display = 'flex';
    imageToshow.src = pic;

}

function closeViewer() {
    imgView.style.display = 'none';

}

// Image Viewer end


// Humburger

let humburger = document.getElementById('humburger');
let sideNav = document.querySelector('.sideNav');

let closeArrow = document.getElementById('closeArrow');
let dropDownSideNavId = document.getElementById('dropDownSideNavId');
humburger.addEventListener('click',
    () => {
        sideNav.style.display = 'block'
    })
closeArrow.addEventListener('click',
    () => {
        sideNav.style.display = 'none'
    })
dropDownSideNavId.addEventListener('click',
    () => {
        sideNav.style.display = 'none'
    })




// Humburger end
