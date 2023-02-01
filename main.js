// click to hide and show navbar

let navbar = document.getElementById('navbar');
let bar = document.getElementById('bar');
let Btnclose = document.getElementById('close');


if (bar) {
  bar.addEventListener("click",() => {
    navbar.classList.add("active")
    // console.log("dehec");
  })
}
if(Btnclose){
  Btnclose.addEventListener("click",() => {
    navbar.classList.remove("active")
    // console.log("dehec");
  })
}

// single-page to show some products
let MainImage=document.getElementById("MainImage");
let smallImg=document.getElementsByClassName("small-img");

smallImg[0].onclick=() => {
  MainImage.src=smallImg[0].src;
}
smallImg[1].onclick=() => {
  MainImage.src=smallImg[1].src;
}
smallImg[2].onclick=() => {
  MainImage.src=smallImg[2].src;
}
smallImg[3].onclick=() => {
  MainImage.src=smallImg[3].src;
}