$(document).ready(function(){
     var numWin = $('#numWindow')[0];


    $.fn.clearIt = function(){
        numWin.value = "";
        };
    $("#num").click(function(){
        if(numWin.value == ""){
            numWin.value = parseInt($(this).val());
            console.log($(this).val());
            }
        else{
        numWin.value = numWin.value + ""+ $(this).val();
             }
    });

    $.fn.pemdas  = function(){
           if(numWin.value ==""){
                numWin.value = "";
            }
         else{
        numWin.value = numWin.value + ""+ $(this).val();
            }       
    }
    
});