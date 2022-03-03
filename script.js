// $('body').html("JQuery");
$('.gridDiv2 div').each(function (i, elem) {
  elem = $(elem);
  elem.css("grid-row", i + 1);
  if (i % 2 === 0) {
    elem.css("grid-column", 1);
    elem.attr("data-aos", "fade-right");
  } else {
    elem.css("grid-column", 2);
    elem.attr("data-aos", "fade-left");
  }
});

var textArray = [
  {
    heading: "Dinning Halls",
    description: "Campus East and Campus West restaurants are the community favorite dining halls with rotating menus and multiple counter themes serving breakfast, lunch, and dinner. This is the place to sample global favorites, including Arabic cuisines, stone-baked pizzas, grilled fish & meats, hot Asian inspired dishes, dedicated vegan and vegetarian counter, and a large self-serve salad bar with over 30 items to choose from. Accepts meal plan.",
    imgsrc: "https://nyuad.nyu.edu/content/nyuad/en/home/campus-life/housing/dining/jcr:content/mainparsys/tabs_1095737787/tabparsys2/columncontol/columnpar5_1/image/image.adaptive.m1525463092610/498.jpg"
  },
  {
    heading: "MarketPlace",
    description: "This urban eatery includes Middle Eastern-themed, made to order grilled meats, shawarmas; El Fuego serves enchiladas, tacos, and burrito bowls.  Escape to New York for pizza, salads & garlic rolls or sink your teeth into our hand-crafted sandwiches, sushi, and wraps from the Deli, or build your own bowl of noodles from our Far East menu. The Marketplace also offers a variety of smoothies, acai bowls, and frozen treats.",
    imgsrc: "https://nyuad.nyu.edu/content/nyuad/en/home/campus-life/housing/dining/jcr:content/mainparsys/tabs_1095737787/tabparsys1/columncontol_117893974/columnpar5_1/image/image.adaptive.m1510291650514/498.jpg"
  },
  {
    heading: "Library Cafe",
    description: "The Library Cafe is the go-to place for a calm study atmosphere while enjoying specialty tea, fresh coffee, and handmade pastries. It's also a popular spot to catch up with friends. Accepts meal plan.",
    imgsrc: "https://nyuad.nyu.edu/content/nyuad/en/home/campus-life/housing/dining/jcr:content/mainparsys/tabs_1095737787/tabparsys3/columncontol/columnpar5_1/image/image.adaptive.m1510291719268/708.jpg"
  },
  {
    heading: "The Torch Club",
    description: "The Torch Club serves as an alternative table service restaurant that is open only to NYUAD faculty and staff. The spacious outdoor terrace is great for escaping the office for a relaxed meal during the cooler months. The Torch Club is also an excellent location for work functions and events. Note: NYUAD faculty and staff are also welcome to buy meals at any other campus dining location",
    imgsrc: "https://nyuad.nyu.edu/content/nyuad/en/home/campus-life/housing/dining/jcr:content/mainparsys/tabs_1095737787/tabparsys5/columncontol/columnpar5_1/image/image.adaptive.m1510291718492/708.jpg"
  }
];

window.onload = function () {
  console.log("loaded");
  showHeading();
  showDescription();
  // initial loading of image
  var imgs = [];
  for (let i = 0; i < 3; i++) {
    imgs.push(new Image());
    imgs[i].src = textArray[i].imgsrc;
  }
};
AOS.init();

var textWrapper1 = document.querySelector('.ml7 .letters');
var textWrapper2 = document.querySelector('.ml11 .letters');

$('.eatButton').each(function (i, elem) {
  elem = $(elem);
  // setting on click
  elem.on("click", (event) => {
    $('.eatButton').each(function (j, elem2) {
      $(elem2).removeClass("active");
      // change text and images
      textWrapper2.style.color = "rgb(9, 34, 143)";
      textWrapper1.innerText = textArray[i].heading;
      textWrapper2.innerText = "";
      $('#divImg').attr("src", textArray[i].imgsrc);
      showHeading();
      setTimeout(() => {
        textWrapper2.innerText = textArray[i].description;
        showDescription();
        $('#divImg').removeClass("scale-up-center");

      }, 1000);
      $('#divImg').addClass("scale-up-center");

    });
    elem.addClass("active");

  });
});

function showHeading() {

  textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
    .add({
      targets: '.ml7 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i
    });
}

function showDescription() {
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x25]|\w)/g, "<span class='letter'>$&</span>");
  textWrapper2.style.color = "white";

  anime.timeline({ loop: false })
    .add({
      targets: '.ml11 .line',
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 750
    }).add({
      targets: '.ml11 .letter',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      offset: '-=775',
      delay: (el, i) => 45 * (i + 1)
    });
}
var isplaying = false;
var sound = new Howl({
  src: ['mymusic.mp3'],
  loop: true
});
$(".music").on("click", () => {
  if (!isplaying) {
    sound.play();
    $(".music img").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsP4chDIghRdpc9W-Mvid0oRYxAkuTtU7h37BhzXk9DXKa4pUgb9l2drQL6wmyLz8DFk&usqp=CAU");
  }
  else {
    sound.pause();
    $(".music img").attr("src","https://icon-library.com/images/play-icon-png-transparent/play-icon-png-transparent-10.jpg");
  }
  isplaying = !isplaying;
});