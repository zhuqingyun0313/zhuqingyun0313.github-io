let isDarkMode = false;

function switchModes(){
    if(isDarkMode === false){
        document.documentElement.style.setProperty("--col-01", "#f2fbeb");
        document.documentElement.style.setProperty("--col-02", "#171219");
        document.documentElement.style.setProperty("--col-03", "#7070ff");
        document.getElementById ("modeButton").innerHTML = "Light Mode";
        isDarkMode = true;
    } else {
    document.documentElement.style.setProperty("--col-01", "#171219");
    document.documentElement.style.setProperty("--col-02", "#f2fbeb");
    document.documentElement.style.setProperty("--col-03", "#5252ff");
    document.getElementById ("modeButton").innerHTML = "Dark Mode";
    isDarkMode = false;
    }
}