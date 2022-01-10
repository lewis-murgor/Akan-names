function dayOfWeek() {
    return (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7;

    var cc = document.getElementById("century").value;
    var yy = document.getElementById("year").value;
    var mm = document.getElementById("month").value;
    var dd = document.getElementById("date").value;

    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    

    if ((dayOfWeek===0) && (gender===male)) {
        alert("You were born on Sunday therefore your akan name is Kwasi");
    } else if ((dayOfWeek===0) && (gender===female)) {
        alert("You were born on Sunday therefore your akan name is Akosua");
    } else if ((dayOfWeek===1) && (gender===male)) {
        alert("You were born on Monday therefore your akan name is Kwadwo");
    } else if ((dayOfWeek===1) && (gender===female)) {
        alert("You were born on Monday therefore your akan name is Adwoa");
    } else if ((dayOfWeek===2) && (gender===male)) {
        alert("You were born on Tuesday therefore your akan name is Kwabena");
    } else if ((dayOfWeek===2) && (gender===female)) {
        alert("You were born on Tuesday therefore your akan name is Abenaa");
    } else if ((dayOfWeek===3) && (gender===male)) {
        alert("You were born on Wednesday therefore your akan name is Kwaku");
    } else if ((dayOfWeek===3) && (gender===female)) {
        alert("You were born on Wednesday therefore your akan name is Akua");
    } else if ((dayOfWeek===4) && (gender===male)) {
        alert("You were born on Thursday therefore your akan name is Yaw");
    } else if ((dayOfWeek===4) && (gender===female)) {
        alert("You were born on Thursday therefore your akan name is Yaa");
    } else if ((dayOfWeek===5) && (gender===male)) {
        alert("You were born on Friday therefore your akan name is Kofi");
    } else if (dayOfWeek===5 && gender===female) {
        alert("You were born on Friday therefore your akan name is Afua");
    } else if (dayOfWeek===6 && gender===male) {
        alert("You were born on Saturday therefore your akan name is Kwame");
    } else {
        alert("You were born on Saturday therefore your akan name is Ama");
    }
}
