$(document).ready(function(){
  
  // Adds Autofocus to text field in bootstrap modal
  $('.modal').on('shown.bs.modal', function () {
    $(this).find('input:text:visible:first').focus();
  })


  // Add UserName to List
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    
    var userName = $("#userName").val();
    var taskTitle = $("<h1>");
    
    taskTitle.append(userName+"\'s CoDo List!");
    $("th").append(taskTitle);
    $("#userName").val("").focus();
    $("#completelydo").fadeOut(1000);
    $("#schedule").prop("disabled", false);
    $("#newTask").prop("disabled", false);
  });
});