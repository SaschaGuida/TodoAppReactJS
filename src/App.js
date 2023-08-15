import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FaTrash, FaStar, FaPlus, FaCheck, FaTimes } from 'react-icons/fa';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState('all');  // 'all', 'completed', 'favorites', 'pending'
  
  // Nuovi stati per il modal
  const [showModal, setShowModal] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoBody, setTodoBody] = useState('');

  const addTodo = () => {
    if (todoTitle.trim() !== '') {
      setTodos([...todos, {
        text: todoTitle,
        body: todoBody,
        isFavorite: false,
        isCompleted: false,
        dueDate: selectedDate
      }]);
      setTodoTitle('');
      setTodoBody('');
      setShowModal(false); // Chiude il modal
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  }

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
        <button onClick={toggleModal}><FaPlus /> Crea Todo</button>
        
        {showModal && (
          <div className="todo-modal">
            <div className="todo-modal-content">
              <div className="todo-modal-header">
                <h2>Crea il todo</h2>
                <button onClick={toggleModal}><FaTimes /></button>
              </div>
              <div className="todo-modal-body">
                <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} placeholder="Titolo del todo" />
                <input type="date" value={selectedDate.toISOString().substr(0,10)} onChange={(e) => setSelectedDate(new Date(e.target.value))} placeholder="Data di scadenza" />
                <textarea value={todoBody} onChange={(e) => setTodoBody(e.target.value)} placeholder="Corpo del todo"></textarea>
                <div className="flags">
                  <button>Importante</button>
                  <button>Completato</button>
                </div>
                <button onClick={addTodo}>Aggiungi Todo</button>
              </div>
            </div>
          </div>
        )}

        {displayedTodos.map((todo, index) => (
          <div key={index} className="todo-item">
            <p style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', flexGrow: 1 }}>
              {todo.text}
            </p>
            <span style={{ marginRight: '15px' }}>Data di scadenza: {todo.dueDate instanceof Date ? todo.dueDate.toLocaleDateString() : ''}</span>
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
