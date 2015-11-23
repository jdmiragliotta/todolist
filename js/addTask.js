$(document).ready(function(){
  $(".alert-danger").hide();
  
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

  // Dismisses Warning
  $("#newTask").on("keydown", function(){
    $(".alert-danger").fadeOut(1000);
  });














});