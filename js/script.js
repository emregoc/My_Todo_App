$(document).ready(function(){

    $(".paragraf").click(function(){ 
        $(this).addClass("checked"); 
       
        
            
   });
});

$(document).ready(function() {
    $( "#suruklee" ).sortable({

        
       // event, ui
       update: function (){

                   var deger = $(this).sortable('serialize');
                 
           // alert(deger);
                  $.ajax({
                       url:"todolist.php",
                       data: deger,
                       type:"POST",
                       success: function(basarili){
                           console.log("başarılı");
                           console.log(basarili);
                           $("#sonuc").html(basarili);
                       }
                   })

           }



    });
   
} );