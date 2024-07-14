document.getElementById('addBtnTask').addEventListener('click', () => {
    let inputTask = document.getElementById('inputTask')
    let inputText = inputTask.value.trim();
    console.log(inputText)

    if (inputText === '') {
        alert('Please Enter a Task')
        return
    }

    const taskList = document.getElementById('taskList')

    const newTask = document.createElement('li')

    const addSpan = document.createElement('span')
    addSpan.textContent = inputText;
    newTask.appendChild(addSpan)
    console.log(addSpan)

    const completeBtn = document.createElement('button')
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'completeBtn'
    completeBtn.addEventListener('click', () => {
        newTask.classList.toggle('completed')
    })
    newTask.appendChild(completeBtn)

    console.log('completeBtn', completeBtn)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'delete'
    deleteBtn.className = 'deleteBtn'
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(newTask)
    })
    newTask.appendChild(deleteBtn)

    taskList.appendChild(newTask)
    inputTask.value = ''


})