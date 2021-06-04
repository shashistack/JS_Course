var todo_tasks = [
    'Have breakfast',
    'Start to Office',
    'Start work',
    'Take a break',
    'Go for Lunch',
    'Continue work',
    'Have Tea',
    'Attend Meeting',
    'Finish your work',
    'Shutdown laptop',
    'Go to Home'
]

// Load Todo Items on the page
function getTodoItems() {
    var todo_list_items = '';
    for (task in todo_tasks) {
        todo_list_items += '<li>' + todo_tasks[task] + '</li>';
    }
    document.getElementById("todo_list").innerHTML = todo_list_items;
}

function addTodo() {
    var new_todo = document.getElementById("todo_task").value;
    if (new_todo == '') {
        alert("Please enter the task");
        document.getElementById("todo_task").focus();
    }
    else {
        todo_tasks.push(new_todo);
        console.log(todo_tasks);
        document.getElementById("todo_list").innerHTML = '';
        getTodoItems(); // populate the list
    }
}

