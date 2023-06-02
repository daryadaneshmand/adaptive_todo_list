let currentTime = 0;

function addTask() {
    let task = document.getElementById('todoInput').value;
    let time = document.getElementById('timeInput').value;
    let list = document.getElementById('todoList');
    let listItem = document.createElement('li');
    listItem.innerHTML = `${currentTime} mins - ${time} mins - ${task}`;
    list.appendChild(listItem);
    document.getElementById('todoInput').value = '';
    document.getElementById('timeInput').value = '';
}

function updateTimes(minutes) {
    currentTime = minutes;
    let listItems = document.getElementById('todoList').getElementsByTagName('li');
    for(let i = 0; i < listItems.length; i++) {
        let timeTask = listItems[i].innerHTML.split(' - ');
        listItems[i].innerHTML = `${minutes} mins - ${timeTask[1]} - ${timeTask[2]}`;
    }
}

// Add "enter" key functionality
document.getElementById("todoInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

document.getElementById("timeInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

$(function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 24 * 60,  // Representing 24 hours in minutes
      value: 0,
      slide: function( event, ui ) {
        updateTimes(ui.value);
      }
    });
});
