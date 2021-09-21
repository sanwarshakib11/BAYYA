$(function(){
    //Preloader Container Section Starts
    $(window).on("load", function(){
        $("#preloader-container").fadeOut(1000);
    })
    //Preloader Container Section Ends
    
    $(window).on("scroll", function(){
        var scrollPosition = $(window).scrollTop();
        //Sticky Nav Section Starts
        if(scrollPosition > 92){
            $("#navbar").addClass("stickyNav");
        }else{
            $("#navbar").removeClass("stickyNav");
        }
        //Sticky Nav Section Ends
        //Back To Top Button Section Starts
        if(scrollPosition > 600){
            $("#backToTop").fadeIn(1000);
        }else{
            $("#backToTop").fadeOut(1000);
        }
    })
    $("#backToTop").on("click", function(){
        $("html,body").animate({
            scrollTop:0
        },1000)
    })
    //Back To Top Button Section Ends
    //Search Button Section Starts

    $("#search-button").on("click", function(){
        $("#search-box").slideToggle(300);
    })
    $(".fa-times").on("click", function(){
        $("#search-box").slideUp(300);
    })
    //Search Button Section Ends
    
})
