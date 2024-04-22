       
var acc = document.getElementsByClassName("accordion");
var i;
                
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } 
    else {
        panel.style.display = "block";
    }
    });
}

const currentDate = new Date();

var hours = currentDate.getHours().toString().padStart(2, '0');
var minutes = currentDate.getMinutes().toString().padStart(2, '0');
var seconds = currentDate.getSeconds().toString().padStart(2, '0');

var formattedDateTime = ' ' + hours + ':' + minutes + ':' + seconds;

document.querySelector(".date").innerHTML = formattedDateTime;