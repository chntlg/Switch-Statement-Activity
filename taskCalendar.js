function askDay(){
    let day = prompt("Enter a day of the week");
    switch (day) {
        case "Monday":
            alert("Read your lecture notes");
            break;
        case "Tuesday":
            alert("Do your activities");
            break;
        case "Wednesday":
            alert("Unwind");
            break;
        case "Thursday":
            alert("Codes");
            break;
        case "Friday":
            alert("Submit requirements");
            break;
        case "Saturday":
            alert("Do your laundry");
            break;
        case "Sunday":
            alert("Sabbath Day")
            break;
            default:
        alert("Not a day of the week")
    }
}