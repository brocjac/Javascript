
function showPopup(){
    var name = askForName("What is you favorite color?");
    alert(name);
}

function askForName(question){
    var response = prompt(question);
    return response;
}