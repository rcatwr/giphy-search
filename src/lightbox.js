





const body = document.getElementsByTagName('BODY')[0];
const lightboxImg = document.querySelector('#lightbox-inner img');
const lightbox = document.getElementById('lightbox');
//const inputLb = document.querySelector('#lightbox-inner input');
const inputLb = document.querySelector('#lightbox-inner p');

export const displayLightbox = link => {
    lightboxImg.setAttribute('src', '');
    //inputLb.setAttribute('value', '');
    inputLb.innerText = link;
    body.classList.add('no-scroll');

    lightboxImg.setAttribute('src', link )

    lightbox.classList.add('shown');

    inputLb.setAttribute('value', link);

}

export const closeLightbox = () => {
   
    

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox){
            lightbox.classList.remove('shown')
            body.classList.remove('no-scroll');
        }
    });

}