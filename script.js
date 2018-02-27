jQuery(function($){
    $(window).on("ready load scroll resize", function() {

        function equalHeight(group, browserWidth) {
            if (browserWidth !== "") {
                var sameColumn = 0;
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
