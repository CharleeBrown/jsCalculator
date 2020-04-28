var numWin = document.getElementById("numWindow");

function clearIt(){
    document.getElementById("numWindow").value = "";
}

function enterButton(button){
    
   
    if(numWin.value == ""){
        numWin.value = parseInt(button.value);
    }
     
    else{
        numWin.value = numWin.value +" "+ button.value;
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

function getValue(){
    
     var getStrings = numWin.value.toString();
     var getarr = getStrings.split(" ");
    console.log(getarr);
    
}




