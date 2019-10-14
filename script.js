function update() {
$("#currentDay").html(moment().format('LLLL'));
}

setInterval(update, 1000);

var saveText = document.querySelectorAll(".form-control");
var event = localStorage.getItem("event");

$(".bclass").on("click", function() {
    $('input[type="text"]').each(function() {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    })
})





/*var saveButton = document.querySelectorAll(".bclass");
var saveText = document.querySelectorAll(".form-control");

var  saveText = localStorage.getItem("text");
localStorage.setItem("event", event);
saveButton.addEventListener("click", function(){
    localStorage.setItem("count", count);
})*/