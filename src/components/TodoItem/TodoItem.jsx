import React from 'react';

const TodoItem = ({ todo, setTodos }) => {
    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id));
    };

    const toggleFavorite = (id) => {
        setTodos(prev => prev.map(item => item.id === id ? { ...item, favorite: !item.favorite } : item));
    };

    return (
        <li>
            {todo.text} {todo.dueDate && `Scade il: ${todo.dueDate.toLocaleDateString()}`}
            <button onClick={() => toggleFavorite(todo.id)}>
                {todo.favorite ? 'Rimuovi dai preferiti' : 'Segna come preferito'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Elimina</button>
        </li>
    );
};

export default TodoItem;
