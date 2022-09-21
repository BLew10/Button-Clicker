
var isLoggedIn = false;

function logOnOff(element){
    if(isLoggedIn === false) {
        element.innerHTML = "Log Out";
        isLoggedIn = true;
    } else if(isLoggedIn === true) {
        element.innerHTML = "Login";
        isLoggedIn = false;
    }

}
