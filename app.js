const shareIcon = document.querySelector("#share-icon");
const socialIcons = document.querySelector("#social-icons");
const socialIconsMobile = document.querySelector("#social-icon-mobile");


shareIcon.addEventListener("click",() => {
    console.log("clicked")
    socialIcons.classList.toggle("article-preview__social-icons_hidden");
})

socialIconsMobile.addEventListener("click", ()=> 
socialIcons.classList.toggle("article-preview__social-icons_hidden"));