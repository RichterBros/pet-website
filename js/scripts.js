$(document).ready(function(){
    $("#black").click(function() {
        $("body").removeClass();
        $("body").addClass("black-background");
        $("p").removeClass();
        $("p").addClass("white-text");
        $("h2").removeClass();
        $("h2").addClass("white-text");

      });

      $("#white").click(function() {
        $("body").removeClass();
        $("body").addClass("white-background");
        $("p").removeClass();
        $("p").addClass("black-text");
        $("h2").removeClass();
        $("h2").addClass("black-text");

      });
});

