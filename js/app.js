$(document).ready(function(){

    $("#one").on("click", function () {
       $(".contnt-wrapper").show("slow", function () {
        $(".contnt-wrapper").animate({
            marginLeft: "300px",
            opacity: "0.5"
        }, 5000)
       });
      
    })
    $("#two").on("click", function () {
        $(".contnt-wrapper").slideUp("slow")
    })
    $("#three").on("click", function () {
        $(".contnt-wrapper").slideToggle("slow")
    })
  
  });