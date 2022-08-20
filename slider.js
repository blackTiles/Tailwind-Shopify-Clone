

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



const images = ['https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/store-builder-desktop-small-83daaddfcd3fa5fa9d8f72d27f55d3c2a2c56e47dbc82fc128ec7e451af21803.png',
                'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sense-desktop-small-b78e5eb27373e527dba35b147124b432bbbaf54fb2c712fba5ba5f31d2209174.png',
                'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/dawn-desktop-small-3e34d3fac5faa12a1563199c58176311cf9354bb550c5cf5d2087f34ccd38f8a.png',
                'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/crave-desktop-small-b7b589ca7d4c48946538c8a4d1ff95b77cb648b605e14b548224d1b5fb9832a3.png',
                'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/app-store-desktop-small-174232c50e27da8ef165d480bf85e1116d855852334b13c42076e78f30d12e24.png',
                ];

const mobileImages = ['https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/store-builder-mobile-small-673695f84b326e3ba2adad96648aba6c969e431c7d02a72d1ab3ca3aeb780500.png',
                      'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/sense-mobile-small-98b6094f1800be603c97e9b58de0176637813ef129bc153bc81827140defc5d3.png',
                      'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/dawn-mobile-small-b603b420e0d1a89e3b276a1c6eb6529410071aa466ac95c4af1601f352b80528.png',
                      'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/crave-mobile-small-2149947bec1c90769bd5d6bbdcf31e4a41cc4f334845f1dd34b44f4bf8b484a4.png',
                      'https://cdn.shopify.com/shopifycloud/brochure/assets/home/desktop-refresh/app-store-mobile-small-abaa0f8034f3fd547bab645e7f4023ef7818f4d4b4fb73f2b05f7888f220c527.png'
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