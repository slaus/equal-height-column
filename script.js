jQuery(function($){

  $(window).on("load ready scroll resize", function() {

    var sameColumn = 0;
       
    function equalHeight(group,browserWidth) {
      if (browserWidth !== "") {
        if ($(window).width() > browserWidth) {
                
          group.each(function() {
            thisHeight = $(this).height();
            (thisHeight > sameColumn) ? sameColumn = thisHeight: "";
          });
        }
      } else {
        group.each(function() {
          thisHeight = $(this).height();
          (thisHeight > sameColumn) ? sameColumn = thisHeight: "";
        });
      }
      group.height(sameColumn);
    }

    equalHeight($(".test"),900);
        
  });
});
