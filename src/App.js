import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FaTrash, FaStar, FaPlus, FaCheck } from 'react-icons/fa';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState('all');  // 'all', 'completed', 'favorites', 'pending'

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, {
        text: inputValue,
        isFavorite: false,
        isCompleted: false,
        dueDate: selectedDate
      }]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleFavorite = (index) => {
    const newTodos = [...todos];
    newTodos[index].isFavorite = !newTodos[index].isFavorite;
    setTodos(newTodos);
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };


  let displayedTodos = todos;

  switch (filter) {
    case 'completed':
      displayedTodos = todos.filter(todo => todo.isCompleted);
      break;
    case 'favorites':
      displayedTodos = todos.filter(todo => todo.isFavorite);
      break;
    case 'pending':
      displayedTodos = todos.filter(todo => !todo.isCompleted);
      break;
    default:
      displayedTodos = todos;
  }

  return (
    <div className="container">
      <div className="sidebar">
        <a href="#" onClick={() => setFilter('all')} className="sidebar-item">Tutti i Todo</a>
        <a href="#" onClick={() => setFilter('completed')} className="sidebar-item">Todo completati</a>
        <a href="#" onClick={() => setFilter('favorites')} className="sidebar-item">Todo preferiti</a>
        <a href="#" onClick={() => setFilter('pending')} className="sidebar-item">Todo da completare</a>
      </div>

      <div className="main-content">
        <div className="todo-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Inserisci un todo..."
          />
          <button onClick={addTodo}><FaPlus /> Crea Todo</button>
        </div>

        {displayedTodos.map((todo, index) => (
          <div key={index} className="todo-item">
            <p style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', flexGrow: 1 }}>
              {todo.text}
            </p>
            <span style={{ marginRight: '15px' }}>Data di scadenza: {todo.dueDate.toLocaleDateString()}</span>
            <button onClick={() => toggleCompleted(index)}>
              <FaCheck color={todo.isCompleted ? 'green' : 'gray'} />
            </button>
            <button onClick={() => toggleFavorite(index)}>
              <FaStar color={todo.isFavorite ? 'gold' : 'gray'} />
            </button>
            <button onClick={() => deleteTodo(index)}>
              <FaTrash color="red" />
            </button>
          </div>
        ))}


      </div>

      <div className="calendar">
        <Calendar value={selectedDate} onChange={setSelectedDate} />
      </div>
    </div>
  );
}

export default App;
