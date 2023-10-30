let tasks = [] // Tableau pour stocker les tâches

// Fonction pour afficher les tâches
function displayTasks () {
  let taskList = document.getElementById('taskList')
  taskList.innerHTML = '' // Effacer la liste actuelle

  // Parcourir le tableau des tâches et les afficher
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement('li')
    li.textContent = tasks[i]
    taskList.appendChild(li)
  }
}

// Fonction pour ajouter une tâche
function addTask (task) {
  tasks.push(task) // Ajoute la tâche au tableau
  displayTasks() // Met à jour l'affichage
}

// Événement pour ajouter une tâche
document.getElementById('addTask').addEventListener('click', function () {
  let newTask = document.getElementById('newTask').value
  addTask(newTask)
  document.getElementById('newTask').value = '' // Réinitialise le champ de saisie
})
