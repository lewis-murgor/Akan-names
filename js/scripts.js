function getAkanName(century, year, month, date) {
    return(((century/4) -2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + date )% 7
}

$("form#akanName").submit(function(event) {
    event.preventDefault();
    var month = $("#month").val();
    var date = $("#date").val();
    var year = $("#year").val();
    var gender = $("#sex").val();

    if ((getAkanName===0) && (gender===male)) {
        alert("You were born on Sunday therefore your akan name is Kwasi");
    } else if ((getAkanName===0) && (gender===female)) {
        alert("You were born on Sunday therefore your akan name is Akosua");
    } else if ((getAkanName===1) && (gender===male)) {
        alert("You were born on Monday therefore your akan name is Kwadwo");
    } else if ((getAkanName===1) && (gender===female)) {
        alert("You were born on Monday therefore your akan name is Adwoa");
    } else if ((getAkanName===2) && (gender===male)) {
        alert("You were born on Tuesday therefore your akan name is Kwabena");
    } else if ((getAkanName===2) && (gender===female)) {
        alert("You were born on Tuesday therefore your akan name is Abenaa");
    } else if ((getAkanName===3) && (gender===male)) {
        alert("You were born on Wednesday therefore your akan name is Kwaku");
    } else if ((getAkanName===3) && (gender===female)) {
        alert("You were born on Wednesday therefore your akan name is Akua");
    } else if ((getAkanName===4) && (gender===male)) {
        alert("You were born on Thursday therefore your akan name is Yaw");
    } else if ((getAkanName===4) && (gender===female)) {
        alert("You were born on Thursday therefore your akan name is Yaa");
    } else if ((getAkanName===5) && (gender===male)) {
        alert("You were born on Friday therefore your akan name is Kofi");
    } else if ((getAkanName===5) && (gender===female)) {
        alert("You were born on Friday therefore your akan name is Afua");
    } else if ((getAkanName===6) && (gender===male)) {
        alert("You were born on Saturday therefore your akan name is Kwame");
    } else {
        alert("You were born on Saturday therefore your akan name is Ama");
    }
});
