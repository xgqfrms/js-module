(function($) {
    
    // When to show the scroll link
    // higher number = scroll link appears further down the page    
    var upperLimit = 1000; 
        
    // Our scroll link element
    var scrollElem = $('#totop');
    
    // Scroll to top speed
    var scrollSpeed = 500;
    
    // Show and hide the scroll to top link based on scroll position    
    scrollElem.hide();
    $(window).scroll(function () {             
        var scrollTop = $(document).scrollTop();        
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeTo(300, 1); // fade back in            
        }else{        
            $(scrollElem).stop().fadeTo(300, 0); // fade out
        }
    });

    // Scroll to top animation on click
    $(scrollElem).click(function(){ 
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false; 
    });

    if (window && window.console) {
        console.log("%s\n%s\n%s\n%s\n%s",
            "Aha, You find me!",
            "Welcome to exchange links if you like my blog",
            "I can buy you a coffee if you are in Hangzhou",
            "------------------------------------------------",
            "Type readme() to get more"
        );
    };
})(jQuery);
function readme() {
    window.location.href="/about";
}