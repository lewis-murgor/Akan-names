function getAkanName () {

    var validateDate = document.getElementById('date').value;

    if (validateDate < 1 || validateDate > 31) {
        alert("Input a valid date");
    } else {
        validateDate;
    }

    var validateMonth = document.getElementById('month').value;

    if (validateMonth < 1 || validateMonth > 12) {
        alert('Input a valid month');
    } else {
        validateMonth;
    }

    var year = document.getElementById('year').value;
    var cc = year.slice(0, 2);
    var yy = year.slice(2, 4);

    var day = Math.floor( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(validateMonth+1)/10)) + validateDate ) % 7;

    let male;
    let female;

    if (document.getElementById("male").checked) {
        male = true;
    } else if (document.getElementById("female").checked) {
        female = true;
    } else {
        alert("You didn't input any gender value");
    }

    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (male && validateDate && validateMonth) {
        switch(day) {
            case 1:
                alert(`You were born on a Sunday therefore your Akan name is ${maleNames[0]}`);
                return false;
                break;
            case 2:
                alert(`You were born on a Monday therefore your Akan name is ${maleNames[1]}`);
                return false;
                break;
            case 3:
                alert(`You were born on a Tuesday therefore your Akan name is ${maleNames[2]}`);
                return false;
                break;
            case 4:
                alert(`You were born on a Wednesday therefore your Akan name is ${maleNames[3]}`);
                return false;
                break;
            case 5:
                alert(`You were born on a Thursday therefore your Akan name is ${maleNames[4]}`);
                return false;
                break;
            case 6:
                alert(`You were born on a Friday therefore your Akan name is ${maleNames[5]}`);
                return false;
                break;
            case 7:
                alert(`You were born on a Saturday therefore your Akan name is ${maleNames[6]}`);
                return false;
                break;
            
            default:
                alert("Sorry we can't find your name");
        }
    } else if (female && validateDate && validateMonth) {
        switch(day) {
            case 1:
                alert(`You were born on a Sunday therefore your Akan name is ${femaleNames[0]}`);
                return false;
                break;
            case 2:
                alert(`You were born on a Monday therefore your Akan name is ${femaleNames[1]}`);
                return false;
                break;
            case 3:
                alert(`You were born on a Tuesday therefore your Akan name is ${femaleNames[2]}`);
                return false;
                break;
            case 4:
                alert(`You were born on a Wednesday therefore your Akan name is ${femaleNames[3]}`);
                return false;
                break;
            case 5:
                alert(`You were born on a Thursday therefore your Akan name is ${femaleNames[4]}`);
                return false;
                break;
            case 6:
                alert(`You were born on a Friday therefore your Akan name is ${femaleNames[5]}`);
                return false;
                break;
            case 7:
                alert(`You were born on a Saturday therefore your Akan name is ${femaleNames[6]}`);
                return false;
                break;
            
            default:
                alert("Sorry we can't find your name");
        }
    } else {
        alert("You entered invalid month or day");
    }
}


