//calls functions
window.onscroll = function() {
  scrollHeader();
  bkgColor();
  imageFilters();
};

//sets the fancy images so that when you hover it changes the about side to the caption
setFancyImages();

//changes the size of the header as you schroll so it doesn't take up the whole screen
function scrollHeader() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.fontSize = "1vw";
    document.getElementById("header").style.height = "5vh";
  } else {
    document.getElementById("header").style.fontSize = "6vw";
    document.getElementById("header").style.height = "100vh";
  }
}

// this function is so I can change the background of the header so the text behind it from the body doesn't overlap
function bkgColor() {
  //chroma basically has a function that creates a scale of one color to another, or have multiple colors
  let f = chroma.scale(['f9f9f9','e9c78f']);
  // let scrollPercent = getScrollPercent();
  document.getElementById("header").style.backgroundColor = f(getScrollPercent()-0.2); //-0.2 because i want to match the top to the top window not the bottom part of the window to the top and -0.2 kind of worked out
}

//changes images sepia filter as you scroll
function imageFilters() {
   var p = getScrollPercent() * 200;
   var images = document.getElementsByTagName("img");

   for (var i = 0; i < images.length; i++) {
     images[i].style.filter = "sepia(" + p + "%)";
   }
}

//couldn't figur out how to change another div from a different div. this is as far as i got

// function setFancyImages() {
//   var fancyImages = document.getElementsByClassName("changeText");
//   for (var i = 0; i < fancyImages.length; i++) {
//     changeAbout(fancyImages[i]);
//   }
// }
//
// function changeAbout(fancyImage){
//   fancyImage.onmouseover = function(){
//     let caption = fancyImage.getAttribute("data-caption");
//     document.getElementById("caption").style.content = caption;
//   }
// }

//finding scroll precentage since chroma only takes values 0 to 1,
function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}
