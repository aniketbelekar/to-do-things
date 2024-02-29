const add = document.getElementById('add');
const editbtn = document.querySelector('.edit');
const tasks = document.querySelector('.tasks');
const input = document.getElementById('taskInput');
const taskDescription = document.getElementById('taskDescription');
const checkbox = document.getElementById('checkbox')

let tasksArray = [];

function deletetask(index) {
    tasksArray.splice(index, 1);
    displayArrayValues();
}

let currentEditIndex = "";

function editTask(index) {
    input.value = tasksArray[index].name;
    taskDescription.value = tasksArray[index].description;
    console.log(tasksArray[index]);
    editbtn.style.display = "block";
    add.style.display = "none";
    currentEditIndex = index;
}

function editTaskValue() {
    // const newArray = [];
    // tasksArray.forEach(function(value, index) {
    //     if (index === currentEditIndex) {
    //         value.name = input.value;
    //         value.description = taskDescription.value;
    //     }
    //     newArray.push(value);
    // });
    // tasksArray = newArray;

    tasksArray[currentEditIndex] = {
        ...tasksArray[currentEditIndex],
        name : input.value,
        description : taskDescription.value,
    }

    displayArrayValues();
    editbtn.style.display = "none";
    add.style.display = "block";
    input.value = "";
    taskDescription.value = "";
}

function displayArrayValues() {
    let htmltasks = '';
    tasksArray.forEach(function(value, index) {
        htmltasks += `<div class="homework">
        <div>
        
        <h3><input type="checkbox" name="checkbox" ${value.checked ? 'checked': ''} onchange="onCheckBoxClicked(this)"> ${value.name}</h3>

        <p>${value.description}</p>
            </div>
            <div style="display:flex;gap:10px;">
                <img src="/delete.png" alt="" onclick="deletetask(${index})">
                <img src="/pen.png" alt="" onclick="editTask(${index})">
            </div>
        </div>`;
    });
    tasks.innerHTML = htmltasks;
}

function onCheckBoxClicked(e){
    const isChecked = e.checked;
    tasksArray[currentEditIndex]={
       ...tasksArray[currentEditIndex],
       checked: isChecked 
    }
    // displayArrayValues();
}
function TaskCompletion(index) {
    tasksArray[index].checked = !tasksArray[index].checked;
    displayArrayValues();
}


function addTask() {
    if (input.value !== '') {
        tasksArray.push({
            name: input.value,
            description: taskDescription.value,
            checked: false,
        });
        input.value = '';
        taskDescription.value = '';
    }
    displayArrayValues();
}

add.addEventListener('click', addTask);
editbtn.addEventListener('click', editTaskValue);
