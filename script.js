$(document).ready(function(){
    $(".nav").slideToggle("");
    $(".fa-server").click(function(){
        $(".nav").slideToggle("slow");
    });
  });

  
  // slider start
 $(document).ready(function () {
     $('.next').click(function(){
         var currentImage = $('.img.curry')
         var currentImageIndex = $('.img.curry').index();
         var nextImageIndex = currentImageIndex + 1;
         var nextImage = $('.img').eq(nextImageIndex);
         currentImage.fadeOut(1000);
         currentImage.removeClass('curry');

         if(nextImageIndex == ($('.img:last').index()+1)){
             $('.img').eq(0).fadeIn(1000);
             $('.img').eq(0).addClass('curry');

         }else {
             nextImage.fadeIn(1000);
             nextImage.addClass('curry');
         }
     });
     $('.prev').click(function(){
         var currentImage = $('.img.curry');
         var currentImageIndex = $('.img.curry').index();
         var prevImageIndex = currentImageIndex - 1;
         var prevImage = $('.img').eq(prevImageIndex);

         currentImage.fadeOut(1000);
         currentImage.removeClass('curry');
         prevImage.fadeIn(1000);
         prevImage.addClass('curry');
     });
 });

 // scrol top start

 $(document).ready(function () {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 200) {
           $('.fa-angle-double-up').show(300)
       }
       else{
           $('.fa-angle-double-up').hide(100)
       }
    })
    $('.fa-angle-double-up').click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 500)
    })
});
// shop start
window.addEventListener('load', function (e) {
    var cart = document.querySelectorAll('button');
    var price = document.querySelector('b');
    for(var i = 0; i < cart.length; i++){
        cart[i].addEventListener('click' , function () {
            this.classList.toggle('cart-active')
            price.innerHTML = count()
        })
    }
 
    function  count() {
         var sum = 0
         for(var i = 0 ; i < cart.length; i++){
             if(cart[i].classList.contains('cart-active')){
                 sum = sum + +cart[i].getAttribute('data-price')
             } 
         }
         return sum
      }
 
     
 });

//section
 $(document).ready(function () {
    $('.next').click(function(){
        var currentImage = $('.img.curr')
        var currentImageIndex = $('.img.curr').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('curr');

        if(nextImageIndex == ($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curr');

        }else {
            nextImage.fadeIn(1000);
            nextImage.addClass('curr');
        }
    });
    $('.prev').click(function(){
        var currentImage = $('.img.curr');
        var currentImageIndex = $('.img.curr').index();
        var prevImageIndex = currentImageIndex -1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass('curr');
        prevImage.fadeIn(1000);
        prevImage.addClass('curr');
        
    });
});




//erel[dlp[orewkc[d,o[ecwk]]]]
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex -1].style.display = "block";
  dots[slideIndex -1].className += " active";
}
