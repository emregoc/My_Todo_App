$(document).ready(function(){

    $(".paragraf").click(function(){ // paragraf etiketli div'e tıklandıgında içinde butonda var
                                     // paragraf etiketinin yanına checked etiketi ekliyor
                                     // ve bu sayede çizimlerin üstü çiziliyor
        $(this).addClass("checked"); // burdaki this'in anlamı o etiketi aldıgımızı gösterir
                                     // yani paragraf etiketi
       
        
            
   });
});

$( function() {
         $( ".surukle" ).sortable();
        $( ".surukle" ).disableSelection();
 } );