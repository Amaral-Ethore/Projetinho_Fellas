let btnprevious = document.getElementById('previous');
let btnnext = document.getElementById('next');
let banner = document.getElementById('banner');

let banners = ['/imagens/banner1.jpeg','/imagens/banner2.jpg','/imagens/banner3.jpg','/imagens/banner4.jpg'];
let count = 0;
// function mudabanner(){
//     banner.setAttribute('src', banners[count]);
//     count++;
//     if(count < banners.length){
//         setTimeout(mudabanner, 3500);
//     }
//     else if(count >= banners.length){
//         count = 0;
//         setTimeout(mudabanner, 3500);
//     }
// }
// setTimeout(mudabanner);
setTimeout(ar                                                            ray.forEach(element => {
    banner.setAttribute('src', banners[count]);
    count++;
    if(count < banners.length){
        setTimeout(mudabanner, 3500);
    }
    else if(count >= banners.length){
        count = 0;
        setTimeout(mudabanner, 3500);
    }
}), timeout);
