$(document).ready(function(){

 // Delete Button Removes Row
  $("table").on("click", ".btn-danger", function() {
    if($("tr").length > 1){
      $(this).parent().parent().fadeOut(1000);
    }
  });

  // Removes Finish Button and Adds Strikethrough
  $("table").on("click", ".btn-info", function(){
    $(this).replaceWith($("<p>").addClass("completed").append("Completed It!"));
    $("p").parent().prev().css("text-decoration", "line-through");
  });
});