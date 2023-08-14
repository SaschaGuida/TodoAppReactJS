import React, { useState } from 'react';

const TodoInput = ({ setTodos }) => {
    const [newTodoText, setNewTodoText] = useState('');
    const [dueDate, setDueDate] = useState(null);

    const addTodo = () => {
        setTodos(prev => [...prev, { id: Date.now(), text: newTodoText, completed: false, favorite: false, dueDate }]);
        setNewTodoText('');
        setDueDate(null);
    };

    return (
        <div>
            <input value={newTodoText} onChange={e => setNewTodoText(e.target.value)} placeholder="Cosa vuoi fare oggi?" />
            <input type="date" value={dueDate ? dueDate.toISOString().split('T')[0] : ''} onChange={e => setDueDate(new Date(e.target.value))} />
            <button onClick={addTodo}>Crea Todo</button>
        </div>
    );
};

export default TodoInput;
