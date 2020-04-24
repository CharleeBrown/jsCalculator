

function enterButton(button){
    
    var numWin = document.getElementById("numWindow");
    if(numWin.value == ""){
        numWin.value = numWin.value + "0";
    }
    else{
        numWin.value = parseInt(numWin.value) + parseInt(button.value);
        console.log(numWin.value);
    }
    


}