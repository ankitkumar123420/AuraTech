const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4animation(){
    var fixed = document.querySelector("#fixedimage")
var image = document.querySelector("#elemcontainer")

image.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
image.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

var elems = document.querySelectorAll(".elem")
 elems.forEach(function(e){
       e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage =`url(${image})`
       })
 })
}
  function swiperanimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
       
    });
  }

  swiperanimation()
  page4animation()

var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
    
},4000)
