$(document).ready(function() {

    // burger ==================================================
    
    $(".burger").click(function(event) {
        $(".burger, .nav").toggleClass("active");
        $("body").toggleClass("lock");
    });

    // intro slider ==================================================
    
    $('.intro_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    
    // brands slider ==================================================
    
    $('.brands_slider').slick({
        slidesToShow: 7,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
             {
                 breakpoint: 993,
                 settings: {
                     slidesToShow: 5,
                     arrows: false,
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 3,
                     arrows: false,
                 }
             },
             {
                 breakpoint: 550,
                 settings: {
                     slidesToShow: 1,
                     arrows: false,
                 }
             }
         ]
    });
    
    // sales slider ==================================================
   
     $('.sales_slider').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 5000,
         responsive: [
             {
                 breakpoint: 993,
                 settings: {
                     slidesToShow: 3,
                     arrows: false,
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 2,
                     arrows: false,
                 }
             },
             {
                 breakpoint: 550,
                 settings: {
                     slidesToShow: 1,
                     arrows: false,
                 }
             }
         ]
     });
    
    // shares slider ==================================================
    
    $('.shares_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
             {
                 breakpoint: 993,
                 settings: {
                     slidesToShow: 1,
                     arrows: false
                 }
             } 
         ]
    })
    
    // tabs =======================================================
    
    $(".sales_tabs_link").click(function(e) {
        e.preventDefault();
        $(".sales_tabs_link").removeClass('active');
        $(this).addClass('active');
    });
    
    

    
    
});