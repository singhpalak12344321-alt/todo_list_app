    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('todo-list');
    const clearBtn = document.getElementById('clear-all');

    // Add todo
    addBtn.addEventListener('click', () => {
      const task = input.value.trim();
      if(task === '') return;
      
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task}</span>
        <div class="btns">
          <button onclick="this.closest('li').classList.toggle('done')">✔️</button>
          <button onclick="this.closest('li').remove()">🗑️</button>
        </div>
      `;
      list.appendChild(li);
      input.value = '';
    });

    // Add todo on enter key
    input.addEventListener('keypress', (e) => {
      if(e.key === 'Enter') addBtn.click();
    });

    // Clear all
    clearBtn.addEventListener('click', () => {
      list.innerHTML = '';
    });
