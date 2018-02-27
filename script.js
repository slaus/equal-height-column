jQuery(function($){
    $(window).on("ready load scroll resize", function() {
        
        var sameColumn = 0;
       
        function equalHeight(group, browserWidth) {
            if (browserWidth !== "") {
                
                group.each(function() {
                    thisHeight = $(this).height();
                    (thisHeight > sameColumn) ? sameColumn = thisHeight: "";
                });
                group.height(sameColumn);
            } else {
            
            }
        }
        
        function windowSize(group, browserWidth){
            if ($(window).width() > browserWidth) {
                group.each(function() {
                    thisHeight = $(this).height();
                    (thisHeight > sameColumn) ? sameColumn = thisHeight: "";
                });
                group.height(sameColumn);
            }
        }

        equalHeight($(".post-item"), 767);
        
    });
    
});
