function dayOfWeek(date, month, century, year) {
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var century = document.getElementById("century").value;

    return ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
}
function getAkanName() {
    var days = ["Sunday","Monday","Tuesday",]
}

