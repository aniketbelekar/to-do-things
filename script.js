
const add = document.getElementById('add');
const editbtn = document.querySelector('.edit');
const tasks = document.querySelector('.tasks');
// const market = document.querySelector('.market');
const delete1 = document.querySelector('.homework img')
// const delete2  = document.querySelector('.market img')
const input = document.getElementById('taskInput');

let tasksArray = [];
function deletetask (index){
    tasksArray.splice(index, 1)
    displayArrayValues()
}
// let currentEditIndex = '';

// function editTask(index){
//     input.value = tasksArray[index];
//  console.log(tasksArray[index])
//  editbtn.style.display = "block";
//  add.style.display = "none";
//  currentEditIndex = index;
// }


// function editTaskValue (){
//     const newArray  = [];
//     tasksArray.forEach(function(value, index){
//         if(index === currentEditIndex){
//             newArray.push(input.value)
//         }else{
//             newArray.push(value)
//         }
//     })

//     tasksArray = newArray;

//     displayArrayValues();
//     editbtn.style.display = "none";
//     add.style.display = "block";
//     input.value = '';
// }

let currentEditIndex = "";
function editTask(index){
    input.value = tasksArray[index];
    editbtn.style.display="block"
    add.style.display="none";
    currentEditIndex=index;

}

function editTaskValue(){
    const newArray = [];
    tasksArray.forEach(function(value,index){
        if(index===currentEditIndex){
            newArray.push(input.value)
        }else{
            newArray.push(value)
        }
    })
    tasksArray= newArray
      displayArrayValues();
      editbtn.style.display="none"
      add.style.display="block"
      input.value=""
}
function displayArrayValues (){
    let htmltasks = '';
    tasksArray.forEach(function(value, index){
        htmltasks = htmltasks + `<div class="homework">
        <h3>${value}</h3>
        <div style="display:flex;gap:10px;">
        <img src="/delete.png" alt="" onclick="deletetask(${index})">
       
    <img src="/pen.png" alt="" onclick="editTask (${index})" >
    </div>
    </div> `;
    })
    tasks.innerHTML  = htmltasks;
}





function addTask() {
    if(input.value !== ''){
        tasksArray.push(input.value)
        input.value = '';
    }
    displayArrayValues()

}

add.addEventListener('click', addTask);
editbtn.addEventListener('click', editTaskValue);