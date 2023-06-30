// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask(){

  const taskText = taskInput.value;
  
  if(taskText.trim() !== ''){

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button')
    deleteButton.textContent = '-';

    deleteButton.addEventListener('click', function () {
      // Remove the task item from the task list
      taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    //clears input field


    taskInput.value = '';
  }
}

addButton.addEventListener('click', addTask);

//displays the date
const todayDiv = document.getElementById('today');
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

todayDiv.textContent = formattedDate;


//displays quotes
const quote = document.getElementById('quote');
const btn = document.getElementById('btn');
const quotes = ["1% Better Every Day", "Put God First", "Stick to the plan."];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quote.textContent = randomQuote;
} 

btn.addEventListener('click', getQuote);
