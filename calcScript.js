

function enterButton(button){
    
    var numWin = document.getElementById("numWindow");
    if(numWin.value == ""){
        numWin.value = parseInt(button.value);
    }
    else{
        numWin.value = parseInt(numWin.value) + parseInt(button.value);
        console.log(numWin.value);
    }
    


}

function clearIt(){
    document.getElementById("numWindow").value = "";
}