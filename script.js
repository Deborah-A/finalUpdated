// let grid2014Element = document.getElementById('grid2014');
// let grid2015Element = document.getElementById('grid2015');
// let grid2016Element = document.getElementById('grid2016');
// let grid2017Element = document.getElementById('grid2017');
// let grid2018Element = document.getElementById('grid2018');
// let grid2019Element = document.getElementById('grid2019');

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
  scrollFunction()
};

// for (var i = 0; i < jsonDatabase.length; i++) {
//   createImages(json2019[i]);
//   createImages(json2018[i]);
//   createImages(json2017[i]);
//   createImages(json2016[i]);
//   createImages(json2015[i]);
//   createImages(json2014[i]);
// }

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "1vw";
    document.getElementById("header").style.height = "5vh";
    document.getElementById("header").style.backgroundColor = "rgba(249, 249, 249, .5)";
    document.getElementById("header").style.boxShadow = "0px 80px 100px rgba(249, 249, 249, .5)";
  } else {
    document.getElementById("header").style.fontSize = "6vw";
    document.getElementById("header").style.height = "100vh";
    document.getElementById("header").style.backgroundColor = "rgba(249, 249, 249, 1)";
    document.getElementById("header").style.boxShadow = "0px 80px 100px rgba(249, 249, 249, 1)";
  }
}

// function createImages(incomingJSON) {
//   /// Create & add footer image
//   let newImage = document.createElement("DIV");
//   newImage.classList.add("imageContainer");
//   newImage.style.backgroundImage = "url('" + incomingJSON['picture_url'] + "')";
//   newImage.style.filter = "grayscale(100%)";
//   newImage.appendChild(newImage);
//
//   /// Add the item to the page
//   contentGridElement.appendChild(newContentElement);
// }
//
// let json2019 = [{
//     "picture_url": "2019/1.png",
//     "description": "A newsletter graphic I made for a Halloween event on campus."
//   },
//   {
//     "picture_url": "2019/2.png",
//     "description": "A photoshop edit I made so I can make a mug for a secret snowflake gift"
//   },
//   {
//     "picture_url": "2019/3.png",
//     "description":"A sketch I made for my Ideation and Prototypying class."
//   },
//   {
//     "picture_url": "2019/6.png",
//     "description": "The final drawing for a Washington Square News Under the Arch piece about the protests in Hong Kong. <br> Took the original drawing and editted the dots out and added color in Photoshop."
//   },
//   {
//     "picture_url": "2019/4.png",
//     "description": "The original drawing I made for an Under the Arch piece about the Hong Kong protests."
//   },
//   {
//     "picture_url": "2019/5.png",
//     "description": "A sketch I made when I was delirious when I stayed up 24 hours."
//   }
// ]
//
// let json2018 = [{
//   "picture_url": "2018/1.png",
//   "description": "An advertisement I made for sunglasses without using sunglasses form my high school design class."
// },
// "picture_url": "2018/2.png",
// "description": "A tutorial illustration where I only used a berry for my high school design class."
// },
// "picture_url": "2018/3.JPG",
// "description": "My finished ceramic hand. Glazed it white and used costume makeup to get the skin color."
// },
// "picture_url": "2018/4.png",
// "description": "A choose your own adventure game I made for my AP Coding class."
// },
// "picture_url": "2018/5.png",
// "description": "Butterfingers. Get it? <br> I made this as a part of a literal interpretations project for my highschool design class."
// },
// "picture_url": "2018/6.png",
// "description": "Water Boy. Get it? <br> I made this as a part of a literal interpretations project for my highschool design class."
// }
// ]
//
// let json2017 = [{
//   "picture_url": "2017/1.JPG",
//   "description": "The druid bust during the second firing."
//   },
//   "picture_url": "2017/1.JPG",
//   "description": "A photograph I took of the aftermath of someone pricking themselves with a needle while making a pillow."
// },
// "picture_url": "2017/2.JPG",
// "description": "A bust I made of a druid. This is it all dried out and ready for the first firing."
// },
// "picture_url": "2017/3.JPG",
// "description": "A terracotta hand I made after the first firing."
// },
// "picture_url": "2017/5.JPG",
// "description": "A kind of lopsided vase I made on the pottery wheel fired and glazed."
// },
// "picture_url": "2017/6.jpg",
// "description": "The druid bust during the raku firing."
// },
// "picture_url": "2017/7.png",
// "description": "A calendar I made in InDesign for my high school design class."
// },
// "picture_url": "2017/8.png",
// "description": "The cover for a calendar I made in InDesign for my high school design class."
// },
// "picture_url": "2017/9.png",
// "description": "A flyer for the programming club I made in high school."
// },
// "picture_url": "2017/10.png",
// "description": "A flyer to help conserve paper towel use for the ecology club I made during high school."
// },
// "picture_url": "2017/11.png",
// "description": "A fishing game I made in code.org for my AP Coding class."
// }
// ]
//
// let json2016 = [{
//   "picture_url": "2016/1.JPG",
//   "description": "A photograph I took of ecology club members recycling."
// },
// "picture_url": "2016/2.JPG",
// "description": "A drawing of a flower I didn't finish."
// },
// "picture_url": "2016/4.JPG",
// "description": "The fox masked after the second firing."
// },
// "picture_url": "2016/3.JPG",
// "description": "A mask I made in ceramics class fired once and glazed."
// },
// "picture_url": "2016/5.JPG",
// "description": "A doodle I made during chemistry class."
// },
// "picture_url": "2016/6.JPG",
// "description": "A small doodle I made during chemistry class."
// },
// "picture_url": "2016/7.JPG",
// "description": "A photograph I took for a photo scavenger hunt for my yearbook class. This is of two people interacting."
// },
// "picture_url": "2016/8.JPG",
// "description": "A photograph I took for a photo scavenger hunt for my yearbook class. This is of someone writing."
// }
// ]
//
// let json2015 = [{
//   "picture_url": "2015/2.JPG",
//   "description": "My second version of my cake, leather hard."
// },
//   "picture_url": "2015/1.JPG",
//   "description": "My first version of my cake fired once and glazed."
// },
// "picture_url": "2015/3.JPG",
// "description": "An agenda cover I made for the agenda cover contest."
// },
// "picture_url": "2015/7.JPG",
// "description": "A sketch of some anime girl from a manga I was reading. Colored."
// },
// "picture_url": "2015/5.JPG",
// "description": "A sketch of some anime girl from a manga I was reading. Inked."
// },
// "picture_url": "2015/4.JPG",
// "description": "A sketch of some anime girl from a manga I was reading. Pencil."
// },
// "picture_url": "2015/8.JPG",
// "description": "A heart I created out of clay. Still pliable."
// },
// ]
//
// let json2014 = [{
//   "picture_url": "2014/1.JPG",
//   "description": "Sketch of a jewelry box."
// },
// "picture_url": "2014/2.JPG",
// "description": "A sketched out album cover redesign."
// },
// "picture_url": "2014/3.JPG",
// "description": "A collage of drawing and magazine clippings."
// },
// "picture_url": "2014/7.JPG",
// "description": "Filia from Skull Girls Part 4."
// },
// "picture_url": "2014/6.JPG",
// "description": "Filia from Skull Girls Part 3."
// },
// "picture_url": "2014/5.JPG",
// "description": "Filia from Skull Girls Part 2."
// },
// "picture_url": "2014/4.JPG",
// "description": "Filia from Skull Girls Part 1."
// },
// "picture_url": "2014/9.JPG",
// "description": "A banner I made for a website made in my high school design class."
// },
// ]
