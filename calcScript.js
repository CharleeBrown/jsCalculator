var numWin = document.getElementById("numWindow");

function enterButton(button){
    
   
    if(numWin.value == ""){
        numWin.value = parseInt(button.value);
    }
    else{
        numWin.value = numWin.value + " " + button.value;
    }
}

function pemdas(button){
    if(numWin.value == ""){
        numWin.value = "";
    }
    else{
        numWin.value = numWin.value + " " + button.value;
    }
}

function clearIt(){
    document.getElementById("numWindow").value = "";
}