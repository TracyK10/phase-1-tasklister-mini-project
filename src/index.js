document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // function to add a task to the list
    addToDo(e.target['new-task-description'].value)
    form.reset()
  })
  
});

function addToDo(todo){
  //creating the todo list
  let list = document.createElement('li')
  list.textContent = `Task: ${todo} `
  let button = document.createElement('button')
  button.textContent = 'DEL'
  button.addEventListener('click', deleteToDo)
  //styling the button
  button.style.fontSize ='14px'

  list.appendChild(button)
  document.getElementById('tasks').appendChild(list)

  //creating the dropdown list
  let dropDown =  document.createElement('select');
  let selectOption = document.createElement('option')
  let high = document.createElement('option')
  let medium = document.createElement( 'option' )
  let low = document.createElement('option')

  //adding text to dropdown
  selectOption.textContent = 'Select priority'
  high.textContent= "High"
  medium.textContent ="Medium"
  low.textContent="Low"

  // appending options and value to each option
  dropDown.appendChild(selectOption)
  dropDown.appendChild(high)
  dropDown.appendChild(medium)
  dropDown.appendChild(low)
//changing the color of the to do item
  dropDown.addEventListener( 'change', (event)=> {
    let option = event.target.value
    if (option === 'High'){
      list.style.color =  'red'
    } else if (option === 'Medium'){
      list.style.color = 'yellow'
    } else if (option === 'Low'){
      list.style.color='green'
    }
  })
  //adding the dropdown next to the To do task
  list.insertBefore(dropDown, button)

  
}

//deleting a task from the list
function deleteToDo(e){
  e.target.parentNode.remove()
}