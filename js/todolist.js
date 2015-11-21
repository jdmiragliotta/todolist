$(document).ready(function(){
  $(".alert-danger").hide();
  
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


    
  });

  // Start of Adding Button 
  $(".btn-success").on("click", function(e) {
    e.preventDefault();
  
    var newTask = $("#newTask").val().trim();
    var isDuplicate = false;
    $("td.task-td").each(function(){
      if($(this).text().trim().toLowerCase() === newTask.toLowerCase()) {
        isDuplicate = true;
        return;
      }
    });

    if(isDuplicate){
      $(".alert-danger").slideDown();
      return;
    }
    
    var newRow = $("<tr>");    // ADD NEW TABLE ROW
    var taskTd = $("<td>").addClass("task-td text").append(newTask);       // ADD NEW TABLE DATA WITH CLASSES TO HOLD NEW TASK
    var completedBtn = $("<button>").addClass("btn btn-info").append("CompletelyDid It");       // ADD NEW BUTTON WITH CLASS AND TEXT
    var completedTd = $("<td>").addClass("completeTd").append(completedBtn);      // ADD BUTTON TO NEW TABLE DATA
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete It!"); // ADD NEW BUTTON WITH CLASS AND TEXT
    var deleteTd = $("<td>").addClass("deleteTd").append(deleteBtn);     // ADD BUTTON INTO NEW TABLE DATA

    newRow.append(taskTd).append(completedTd).append(deleteTd);
    $("tbody").append(newRow);

    $("#newTask").val("").focus();
  }); 
  // End of Adding Button

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
  
  // Dismisses Warning
  $("#newTask").on("keydown", function(){
    $(".alert-danger").fadeOut(1000);
  });














});