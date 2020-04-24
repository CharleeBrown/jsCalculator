

function enterButton(button){
    
    var numWin = document.getElementById("numWindow");
    numWin.value = parseInt(numWin.value) + parseInt(button.value);
    console.log(numWin.value);


}