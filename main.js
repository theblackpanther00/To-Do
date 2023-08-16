const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Retrieve tasks from local storage if available
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks from local storage
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(function(taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '-';
    deleteButton.addEventListener('click', function () {
      // Remove the task item from the task list and update local storage
      const taskIndex = tasks.indexOf(taskText);
      if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });
}

function addTask(){
  const taskText = taskInput.value;

  if(taskText.trim() !== ''){
    tasks.push(taskText); // Add task to the tasks array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
    renderTasks(); // Render tasks
    taskInput.value = ''; // Clear input field
  }
}

addButton.addEventListener('click', addTask);

// Display the date
const todayDiv = document.getElementById('today');
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

todayDiv.textContent = formattedDate;

// Display quotes
const quote = document.getElementById('quote');
const btn = document.getElementById('btn');
const quotes = ["1% Better Every Day", "Put God First", "Stick to the plan.", "Life gets hard sometimes, Just rely on God and keep going." ,"Every day is a new chance to make a difference.", "Believe in yourself and you will be unstoppable.", "The harder you work, the luckier you get."];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quote.textContent = randomQuote;
} 

btn.addEventListener('click', getQuote);

// Render tasks on page load
renderTasks();
