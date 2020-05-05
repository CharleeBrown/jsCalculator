var numWin = document.getElementById("numWindow");
var tests = document.getElementById("testWindow");
numWin.addEventListener("keydown", getkey);
//body.addEventListener("keydown", getkey);
document.addEventListener("keydown", getkey);

function getkey(event) {
    numWin.focus();
    if (event.keyCode == 13) {
        getValue();
    }
    if (event.keyCode == 46) {
        clearIt();
    }
    console.log(event.keyCode);
}

function clearIt() {
    document.getElementById("numWindow").value = "";
}

function enterButton(button) {

    var checks = numWin.split(" ");
    if (checks[0].value == null) {
        numWin.value = parseInt(button.value);
    } else if (checks[1] == null) {
        numWin.value = "";
        numWin.value = parseInt(button.value);
    } else {
        numWin.value = numWin.value + " " + button.value;
    }
}

function pemdas(button) {
    if (numWin.value == "") {
        numWin.value = "";
    } else {
        numWin.value = numWin.value + " " + button.value;
    }
}

var errorShow = document.getElementById("errorShow");

function getValue() {
    try {
        numWin.value = eval(numWin.value);
    } catch (error) {
        if (err = "SyntaxError: \"missing ) in parenthetical\"") {
            errorShow.innerHTML = "Close Parenthesis";
            var doTime = setTimeout(clearError(), 300);
            clearTimeout(doTime);
        }
    }
}

function clearError() {
    errorShow.innerHTML = "";
}