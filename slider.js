

// currentImage = 0;

// const changeImage = () => {
//     currentImage++;
//     if (currentImage >= images.length) {
//         currentImage = 0;
//     }
//     if(currentImage==4){
//         document.getElementById('slider').style.width="90%";
//         document.querySelector('.image-slider').style.paddingBottom="70px";
//         document.querySelector('.image-slider').style.backgroundColor = colors[currentImage];
//         document.getElementById('slider').src = `${images[currentImage]}`;
//     }
//     else{
//         document.getElementById('slider').style.width="70%";
//         document.querySelector('.image-slider').style.paddingBottom="0px";
//         document.querySelector('.image-slider').style.backgroundColor = colors[currentImage];
//         document.getElementById('slider').src = `${images[currentImage]}`;
//     }
// }

// setInterval(changeImage, 5000);



const images = ['./assets/2.webp',
                './assets/3.webp',
                './assets/4.webp',
                './assets/5.webp',
                './assets/6.webp',
                ];

const mobileImages = ['./assets/mobile2.webp',
                      './assets/mobile3.webp',
                      './assets/mobile4.webp',
                      './assets/mobile5.webp',
                      './assets/mobile6.png'
                    ];

const colors = ['rgb(148, 79, 79)','rgb(176, 244, 82)','rgb(14, 59, 126)','rgb(149, 7, 123)','rgb(4, 4, 4)'];

currentImageMobile = 0;              
const changeImageMobile = () => {
    var item1 = document.querySelector('.item1');
    var item2 = document.querySelector('.item2');
    var item3 = document.querySelector('.item3');
    var line1 = document.querySelector('.line1');
    var line2 = document.querySelector('.line2');
    var line3 = document.querySelector('.line3');

    currentImageMobile++;
    if (currentImageMobile >= mobileImages.length) {
        currentImageMobile = 0;
    }
    if(currentImageMobile==0){
        if(window.innerWidth < 720){
            item1.style.display = 'flex';
            item2.style.display = 'none';
            item3.style.display = 'none';
        }
        else{
            item1.style.display = 'flex';
            item2.style.display = 'flex';
            item3.style.display = 'flex';
        }
        line2.classList.remove("line-2");
        line3.classList.remove("line-1");
        line1.classList.add("line-1");
        document.querySelector('.image-slider-mobile').style.backgroundColor = colors[currentImageMobile];
        document.getElementById('slider-mobile').src = `${mobileImages[currentImageMobile]}`;

        document.getElementById('slider').style.width="70%";
        document.querySelector('.image-slider').style.paddingBottom="0px";
        document.querySelector('.image-slider').style.backgroundColor = colors[currentImageMobile];
        document.getElementById('slider').src = `${images[currentImageMobile]}`;
    }
    else if(currentImageMobile==1 || currentImageMobile==2 || currentImageMobile==3) {
        if(window.innerWidth < 720){
            item1.style.display = 'none';
            item2.style.display = 'flex';
            item3.style.display = 'none';
        }
        else{
            item1.style.display = 'flex';
            item2.style.display = 'flex';
            item3.style.display = 'flex';
        }
        line3.classList.remove("line-1");
        line1.classList.remove("line-1");
        line2.classList.add("line-2");
        document.querySelector('.image-slider-mobile').style.backgroundColor = colors[currentImageMobile];
        document.getElementById('slider-mobile').src = `${mobileImages[currentImageMobile]}`;

        document.getElementById('slider').style.width="70%";
        document.querySelector('.image-slider').style.paddingBottom="0px";
        document.querySelector('.image-slider').style.backgroundColor = colors[currentImageMobile];
        document.getElementById('slider').src = `${images[currentImageMobile]}`;
    }
    else{
        if(window.innerWidth < 720){
            item1.style.display = 'none';
            item2.style.display = 'none';
            item3.style.display = 'flex';
        }
        else{
            item1.style.display = 'flex';
            item2.style.display = 'flex';
            item3.style.display = 'flex';
        }
        line1.classList.remove("line-1");
        line2.classList.remove("line-2");
        line3.classList.add("line-1");
        document.querySelector('.image-slider-mobile').style.backgroundColor = colors[currentImageMobile];
        document.getElementById('slider-mobile').src = `${mobileImages[currentImageMobile]}`;

        document.getElementById('slider').style.width="90%";
        document.querySelector('.image-slider').style.paddingBottom="70px";
        document.querySelector('.image-slider').style.backgroundColor = colors[currentImageMobile];
        document.getElementById('slider').src = `${images[currentImageMobile]}`;
    }
    
}

setInterval(changeImageMobile, 5000);


currentMerchant = 0;

function nextMerchant(){
    merchant1 = document.querySelector('.merchant1');
    merchant2 = document.querySelector('.merchant2');
    merchant3 = document.querySelector('.merchant3');
    if(currentMerchant==0){
        merchant1.style.display = 'none';
        merchant2.style.display = 'flex';
        merchant3.style.display = 'none';
        currentMerchant++;
    }
    else if(currentMerchant==1){
        merchant1.style.display = 'none';
        merchant2.style.display = 'none';
        merchant3.style.display = 'flex';
        currentMerchant++;
    }
    else{
        merchant1.style.display = 'flex';
        merchant2.style.display = 'none';
        merchant3.style.display = 'none';
        currentMerchant=0;
    }
}

function previousMerchant(){
    merchant1 = document.querySelector('.merchant1');
    merchant2 = document.querySelector('.merchant2');
    merchant3 = document.querySelector('.merchant3');
    if(currentMerchant==0){
        merchant1.style.display = 'none';
        merchant2.style.display = 'none';
        merchant3.style.display = 'flex';
        currentMerchant=2;
    }
    else if(currentMerchant==1){
        merchant1.style.display = 'flex';
        merchant2.style.display = 'none';
        merchant3.style.display = 'none';
        currentMerchant=0;
    }
    else{
        merchant1.style.display = 'none';
        merchant2.style.display = 'flex';
        merchant3.style.display = 'none';
        currentMerchant=1;
    }
}