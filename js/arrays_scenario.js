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
    var i = 0;
    for (task in todo_tasks) {
        var edit_btn = '<button id="edit_' + i + '" class="edit_btn" onclick="edit_task(' + i + ')">Edit</button>';
        var delete_btn = '<button id="delete_' + i + '" class="delete_btn" onclick="delete_task(' + i + ')">Delete</button>';
        todo_list_items += '<li id="li_' + i + '">' + todo_tasks[task] + edit_btn + ' ' + delete_btn + '</li>';
        i++;
    }
    document.getElementById("todo_list").innerHTML = todo_list_items;
}

function addTodo() {
    var new_todo = document.getElementById("todo_task").value;
    if (new_todo == '') {
        alert("Please enter the task name");
        document.getElementById("todo_task").focus();
    }
    else {
        todo_tasks.push(new_todo);
        console.log(todo_tasks);
        document.getElementById("todo_list").innerHTML = '';
        getTodoItems(); // populate the list
    }
}

function edit_task(id) {
    console.log(id);
    console.log(todo_tasks[id]);
    document.getElementById("li_" + id).innerHTML = '<input type="text" id="update_' + id + '" value="' + todo_tasks[id] + '"> <button onclick="update_task(' + id + ')">Update</button>';
}

function delete_task(id) {
    console.log(id);
    var permission = confirm("Are you sure you want to delete the item?");
    console.log(permission);
    if (permission) {
        todo_tasks.splice(id, 1);
        getTodoItems(); // repopulate the list of items
    }
}

function update_task(id) {
    console.log(id);
    var new_value = document.getElementById("update_" + id).value;
    if (new_value == '') {
        alert("Please enter something");
        document.getElementById("update_" + id).focus();
    }
    console.log(new_value);
    todo_tasks[id] = new_value;
    getTodoItems(); // repopulate the list of items
}
