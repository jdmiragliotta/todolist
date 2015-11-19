$(document).ready(function(){
  $(".alert-danger").hide();
  
  $(".btn-success").on("click", function(e) {
    e.preventDefault();
  
    var newTask = $("#newTask").val().trim();
    var isDuplicate = false;
    $("td.task-td").each(function(){
      if($(this.text().trim().toLowerCase()) === newTask.toLowerCase()){
        isDuplicate = true;
        return;
      }
    });

    if(isDuplicate){
      $(".alert-danger")
      return;
    }

    var newRow = $("<tr>");
    var taskTd = $("<td>").addClass("task-td").append(newTask);
    
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete It!");
    var deleteTd = $("<td>").append(deleteBtn);
    
    var completedBtn = $("<button>").addClass("btn btn-info").append("Boom Killed It!");
    var completedTd = $("<td>").append(completedBtn);

    newRow.append(taskTd).append(deleteTd);
    $("tbody").append(newRow);

    $("#newWord").val("").focus();
  }); // End of Adding Button














});