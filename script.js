let todos = []; // 所有任務的陣列

// 嘗試讀取儲存的任務
const stored = localStorage.getItem('todos');
if (stored) {
  todos = JSON.parse(stored);
  todos.forEach(renderItem); // 一啟動就畫出所有儲存過的項目
}

// 找到 input、button、ul 這三個元素
const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// 綁定 click 事件到按鈕
button.addEventListener('click', () => {
    const task = input.value.trim();
    if (task === '') return;
  
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));
  
    renderItem(task);
    input.value = '';
  });
  


  function renderItem(task) {
    const li = document.createElement('li');
    li.textContent = task;
  
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.className = 'delete-btn';
  
    delBtn.addEventListener('click', () => {
      li.remove();
  
      // 同步刪除 localStorage 裡的那個項目
      todos = todos.filter(t => t !== task);
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  
    li.appendChild(delBtn);
    list.appendChild(li);
  }
  
  


  

