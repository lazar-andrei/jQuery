$(document).ready(function(){

  $(".add-button").click(function(){

    $(".list").append('<li class="todo uncompleted"><span>'+$("input[type=text]").val()+'</span> <i class="fas fa-check check"></i><i class="fas fa-trash-alt remove-task"></i></li>')
  })

  $(".add-button").click(function(){
      $("input[type=text]").val("");
  
  });

  $(".list").on("click",".check",function(){
    $(this).parent().toggleClass("completed");
  });

  $(".list").on("click",".remove-task",function(){
    $(this).parent().css({
    "transform":"rotate(60deg)" ,
    "transition": "all 1s ease-in-out",
    "opacity" : "0",
    "position": "relative"}).delay(700).queue(function(){
      $(this).remove();
    }) 
  });
  

 
 $(".select-desktop").change(function(){
    
  $(".todo").each(function(){
    
    switch ($(".select-desktop").on("option").val()){

      case "all":
        $(this).css("display","flex");
       
        break;
      case "completed":
        if ($(this).hasClass("completed")){
          $(this).css("display","flex");
        }else{
          $(this).css("display","none");
        }
      
        break;
      case "uncompleted":
          
        if (!$(this).hasClass("completed")){
          $(this).css("display","flex");
        }else{
          $(this).css("display","none");
        }
        
        break;
        }
  });
   
  });   



  $(".select-mobile").change(function(){
    
    $(".todo").each(function(){
      
      switch ($(".select-mobile").on("option").val()){
  
        case "all":
          $(this).css("display","flex");
         
          break;
        case "completed":
          if ($(this).hasClass("completed")){
            $(this).css("display","flex");
          }else{
            $(this).css("display","none");
          }
        
          break;
        case "uncompleted":
            
          if (!$(this).hasClass("completed")){
            $(this).css("display","flex");
          }else{
            $(this).css("display","none");
          }
          
          break;
          }
    });
     
    }); 
  /*$(window).resize(function(){

    if ($(window).width()>= 520) {
    $(".select-container-mobile").remove();
  }
}); */
  

});
