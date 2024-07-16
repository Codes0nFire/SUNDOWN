var fixer=document.querySelector('.fixer');

var texts=document.querySelector(".texts");

texts.addEventListener("mouseenter",()=>{


    fixer.style.display="initial";


})

texts.addEventListener("mouseleave",()=>{


    fixer.style.display="none";


})


document.querySelectorAll(".text").forEach((text)=>{
 text.addEventListener("mouseenter",()=>{
    var bgImage=text.getAttribute("data-image");
    fixer.style.backgroundImage=`url(${bgImage})`;
    // alert("enter hua hai bhi")
 })

})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var swiper=document.querySelector(`.swiper`);
  var movement=document.querySelector(`.movement`);

  swiper.addEventListener("mouseenter",()=>{

    // movement.style.display="flex";
    movement.style.scale="1";

  })


  swiper.addEventListener("mouseleave",()=>{

   
    movement.style.scale="0";
    // movement.style.display="none ";

  })


  var move=document.querySelector(`.movement`);

  swiper.addEventListener("mousemove",(dets)=>{


    console.log(dets.x,dets.y);
    
    move.style.left= dets.x+"px";
    move.style.top= dets.y+"px";
    
  })





  var loader=document.querySelector(".loader");

  setInterval(function(){
    loader.style.bottom="200%";
  },2600);