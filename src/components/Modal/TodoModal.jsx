import React from 'react';

function TodoModal(props) {
    return (
        <div className="todo-modal">
            <div className="todo-modal-content">
                <div className="todo-modal-header">
                    <h2>Crea il todo</h2>
                    <button onClick={props.closeModal}>X</button>
                </div>
                <div className="todo-modal-body">
                    <input type="text" placeholder="Titolo del todo" />
                    <input type="date" placeholder="Data di scadenza" />
                    <textarea placeholder="Corpo del todo"></textarea>
                    <div className="flags">
                        <button>Importante</button>
                        <button>Completato</button>
                    </div>
                    <button onClick={props.addTodo}>Aggiungi Todo</button>
                </div>
            </div>
        </div>
    );
}

export default TodoModal;
