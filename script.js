function update() {
$("#currentDay").html(moment().format('LLLL'));
}

setInterval(update, 1000);

var time = moment();

if (time.isAfter(moment('9', 'hh'))) {
    $("#9AM").addClass("past");
}
if (time.isBefore(moment('9', 'hh'))) {
    $("#9AM").addClass("future");
}
if (time.isBetween(moment('9', 'hh') && moment('10', 'hh'))) {
    $("#9AM").addClass("present");
}

if (time.isAfter(moment('10', 'hh'))) {
    $("#10AM").addClass("past");
}
if (time.isBefore(moment('10', 'hh'))) {
    $("#10AM").addClass("future");
}
if (time.isBetween(moment('10', 'hh') && moment('11', 'hh'))) {
    $("#10AM").addClass("present");
}

if (time.isAfter(moment('11', 'hh'))) {
    $("#11AM").addClass("past");
}
if (time.isBefore(moment('11', 'hh'))) {
    $("#11AM").addClass("future");
}
if (time.isBetween(moment('11', 'hh') && moment('12', 'hh'))) {
    $("#11AM").addClass("present");
}

if (time.isAfter(moment('12', 'hh'))) {
    $("#12PM").addClass("past");
}
if (time.isBefore(moment('12', 'hh'))) {
    $("#12PM").addClass("future");
}
if (time.isBetween(moment('12', 'hh') && moment('13', 'hh'))) {
    $("#12PM").addClass("present");
}

if (time.isAfter(moment('13', 'hh'))) {
    $("#1PM").addClass("past");
}
if (time.isBefore(moment('13', 'hh'))) {
    $("#1PM").addClass("future");
}
if (time.isBetween(moment('13', 'hh') && moment('14', 'hh'))) {
    $("#1PM").addClass("present");
}

if (time.isAfter(moment('14', 'hh'))) {
    $("#2PM").addClass("past");
}
if (time.isBefore(moment('14', 'hh'))) {
    $("#2PM").addClass("future");
}
if (time.isBetween(moment('14', 'hh') && moment('15', 'hh'))) {
    $("#2PM").addClass("present");
}

if (time.isAfter(moment('15', 'hh'))) {
    $("#3PM").addClass("past");
}
if (time.isBefore(moment('15', 'hh'))) {
    $("#3PM").addClass("future");
}
if (time.isBetween(moment('15', 'hh') && moment('16', 'hh'))) {
    $("#3PM").addClass("present");
}

if (time.isAfter(moment('16', 'hh'))) {
    $("#4PM").addClass("past");
}
if (time.isBefore(moment('16', 'hh'))) {
    $("#4PM").addClass("future");
}
if (time.isBetween(moment('16', 'hh') && moment('17', 'hh'))) {
    $("#4PM").addClass("present");
}

if (time.isAfter(moment('17', 'hh'))) {
    $("#5PM").addClass("past");
}
if (time.isBefore(moment('17', 'hh'))) {
    $("#5PM").addClass("future");
}
if (time.isBetween(moment('17', 'hh') && moment('18', 'hh'))) {
    $("#5PM").addClass("present");
}

var saveEvent = document.querySelectorAll("input[type='text']");

$(".bclass").on("click", function() {
    var id = $(this).val();
    var msg = $('#' + id).val();
    window.localStorage.setItem(id, msg);
    console.log(msg);
    })

   function load(id) {
            var storedData = localStorage.getItem(id);
            if(storedData) {
                $('#' + id).val(storedData);
            }
            //console.log(id);
        }
       
       var times = '9AM, 10AM, 11AM, 12PM, 1PM, 2PM, 3PM, 4PM, 5PM'.split(', ');
       console.log(times);
       times.forEach(function (time) {
           load(time);
       })
       load(); 
