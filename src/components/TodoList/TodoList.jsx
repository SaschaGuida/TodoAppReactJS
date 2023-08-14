import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, setTodos, filter }) => {
    const filteredTodos = todos.filter((todo) => {
        switch (filter) {
            case 'completed':
                return todo.completed;
            case 'favorite':
                return todo.favorite;
            case 'pending':
                return !todo.completed;
            default:
                return true;
        }
    });

    return (
        <ul>
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
            ))}
        </ul>
    );
};

export default TodoList;
