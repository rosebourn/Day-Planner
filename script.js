function update() {
$("#currentDay").html(moment().format('LLLL'));
}

setInterval(update, 1000);

var time = moment();

if (time.isAfter(moment('9', 'hh'))) {
    $("#9AM").addClass(".past");
}
if (time.isBefore(moment('9', 'hh'))) {
    $("#9AM").addClass(".future");
}
if (time.isSame(moment('9', 'hh'))) {
    $("#9AM").addClass(".present");
}
if (time.isAfter(moment('10', 'hh'))) {
    $("#10AM").addClass(".past");
}
if (time.isBefore(moment('10', 'hh'))) {
    $("#10AM").addClass(".future");
}
if (time.isSame(moment('10', 'hh'))) {
    $("#10AM").addClass(".present");
}
if (time.isAfter(moment('11', 'hh'))) {
    $("#11AM").addClass(".past");
}
if (time.isBefore(moment('11', 'hh'))) {
    $("#11AM").addClass(".future");
}
if (time.isSame(moment('11', 'hh'))) {
    $("#11AM").addClass(".present");
}
if (time.isAfter(moment('12', 'hh'))) {
    $("#12PM").addClass(".past");
}
if (time.isBefore(moment('12', 'hh'))) {
    $("#12PM").addClass(".future");
}
if (time.isSame(moment('12', 'hh'))) {
    $("#12PM").addClass(".present");
}
if (time.isAfter(moment('13', 'hh'))) {
    $("#1PM").addClass(".past");
}
if (time.isBefore(moment('13', 'hh'))) {
    $("#1PM").addClass(".future");
}
if (time.isSame(moment('13', 'hh'))) {
    $("#1PM").addClass(".present");
}
if (time.isAfter(moment('14', 'hh'))) {
    $("#2PM").addClass(".past");
}
if (time.isBefore(moment('14', 'hh'))) {
    $("#2PM").addClass(".future");
}
if (time.isSame(moment('14', 'hh'))) {
    $("#2PM").addClass(".present");
}
if (time.isAfter(moment('15', 'hh'))) {
    $("#3PM").addClass(".past");
}
if (time.isBefore(moment('15', 'hh'))) {
    $("#3PM").addClass(".future");
}
if (time.isSame(moment('15', 'hh'))) {
    $("#3PM").addClass(".present");
}
if (time.isAfter(moment('16', 'hh'))) {
    $("#4PM").addClass(".past");
}
if (time.isBefore(moment('16', 'hh'))) {
    $("#4PM").addClass(".future");
}
if (time.isSame(moment('16', 'hh'))) {
    $("#4PM").addClass(".present");
}
if (time.isAfter(moment('17', 'hh'))) {
    $("#5PM").addClass(".past");
}
if (time.isBefore(moment('17', 'hh'))) {
    $("#5PM").addClass(".future");
}
if (time.isSame(moment('17', 'hh'))) {
    $("#5PM").addClass(".present");
}
var saveEvent = document.querySelectorAll("input").value;

$(".bclass").on("click", function() {
    localStorage.setItem('text', saveEvent);
       console.log("test");
    })