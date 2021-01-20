$(document).ready(function(){
  $(function(){
    $("#tabs").tabs();
  });

  $(function(){
    $("ul").sortable({axis: "x", containment: "#tabs"}).disableSelection();
  });

  $(function(){
    $("ol").sortable({axis: "y", containment:"parent"}).disableSelection();
  });

  $("#tabs").on("click", "input[type=checkbox]",function(){
    $(this).parent().slideUp(500, "linear");
  });

  $("#btnAddProject").button().click(function(){
    $("#project-dialog").dialog({width:400, resizable:false, modal:true, buttons :{
      "Add new project" : function(){
      var projectName =$("#new-project").val();
      var replaceName = projectName.split(" ").join("_");
      console.log(replaceName);
      $("<li> <a href='#"+ replaceName+"'>" +projectName+' </a><i class="fas fa-times"></i></li>').appendTo("#main");
      $("<ol id='"+replaceName+"'> </ol").appendTo("#tabs").sortable();
      $("#tabs").tabs("refresh");
      var tabCount= $("#tabs .ui-tabs-nav li").length;
      $("#tabs").tabs("option", "active", tabCount-1);

      $("#new-project").val("");
      $(this).dialog("close");
      },

      "Cancel": function(){
        $("#new-project").val("");
        $(this).dialog("close");
      }
    }});
  });

  $("#btnAddTask").button().click(function(){
    $("#task-dialog").dialog({width:400, resizable:false, modal:true, buttons :{
        "Add new task" : function(){

          $("#tabs").tabs("refresh");
          var activeTab = $("#tabs").tabs("option", "active");
          var title = $("#main > li:nth-child("+ (activeTab + 1) +") > a").attr("href");
          $("#tabs "+ title).append("<li class='to-do'><input type='checkbox'>"+ $("#new-task").val() +"</li>");

          $("#new-task").val("");

          $(this).dialog("close");
        },


        "Cancel": function(){
          $("#new-task").val("");
          $(this).dialog("close");
        }}
      });
  });

  
  $("#tabs").on("click","i", function(){
    
    console.log("click");
    var index= $(this).closest("li").index();
    var id= $("#tabs li:eq("+index+") a").attr("href");
    $("#tabs li:eq("+index+")").remove();
    $(id).remove();
    $("#tabs").tabs("refresh");
    
  });

});