// var swiper = new Swiper(".key-contianer", {
//     slidesPerView: 1,
//     spaceBetween:10,
//     loop:true,
//     centeredSlides:true,
//     grabCursor:true,
//     autoplay: {
//         delay: 1000,
//         disableOnInteraction: false,
//       },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//        },
//     breakpoints: {
//      0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       991: {
//         slidesPerView: 5,
//       },
//     },
//   });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: '5',
  spaceBetween: 10,
  centeredSlides:true,
  grabCursor:true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
            delay: 400000,
            disableOnInteraction: false,
          },
  breakpoints: {
         0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 5,
          },
        },
  
});