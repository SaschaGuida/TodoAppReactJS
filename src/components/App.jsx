import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Sidebar from './Sidebar';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Sidebar setFilter={setFilter} />
            
            <main style={{ flex: 2 }}>
                <TodoInput setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} filter={filter} />
            </main>

            <aside style={{ flex: 1 }}>
                <Calendar />
            </aside>
        </div>
    );
};

export default App;
