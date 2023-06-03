// JavaScript Document
var typed = new Typed(".element", {
  strings: [
    "<i class=" +
      "bi-facebook" +
      ">Facebook.com/adminzutongg/</i> </br> </br> <i class=" +
      "bi-tiktok" +
      ">Tiktok.com/@zu.tongg</i> </br> </br> <i class=" +
      "bi-telephone-fill" +
      ">Zalo: 0394.510.165</i> </br> </br> <i class=" +
      "bi-envelope" +
      ">Vumanhjob@gmail.com</i>",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
$("#doingu").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
