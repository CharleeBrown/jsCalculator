var numWin = document.getElementById("numWindow");

function clearIt(){
    document.getElementById("numWindow").value = "";
}

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

function getValue(){
     var getStrings = numWin.value.toString();
     var getarr = getStrings.split(" ");
     if(getarr[1].value = "+"){
         var results = parseInt(getarr[0]) + parseInt(getarr[2]);
         console.log(results);
         numWin.value = results;
     }
     else if (getarr[1].value ="-"){
         if(parseInt(getarr[0]) > parseInt(getarr[2])){
             results = parseInt(getarr[0]) - parseInt(getarr[2]);
            }
            else if(parseInt(getarr[2]) > parseInt(getarr[0]))
            {
                results = parseInt(getarr[2]) - parseInt(getarr[0]);
            }
            console.log(results);
            /* if(results < 0){
                  results = parseInt(results) * -1; 
                 console.log("-" + results);*/
             numWin.value = "-" + results;     
    }
     else if (getarr[1].value ="*"){
        var results = parseInt(getarr[0]) * parseInt(getarr[2]);
        console.log(results);
        numWin.value = results;
     }
        else if (getarr[1].value ="/"){
            var results = parseInt(getarr[0]) % parseInt(getarr[2]);
            console.log(results);
            numWin.value = results;
        }
  //  console.log(Math.Add(parseInt(getarr[0])  + getarr[1] + parseInt(getarr[2]));
    
}




