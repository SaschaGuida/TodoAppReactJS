import React from 'react';

const Sidebar = ({ setFilter }) => {
    return (
        <aside style={{ flex: 1 }}>
            <h3>Menu</h3>
            <ul>
                <li onClick={() => setFilter('all')}>Tutti</li>
                <li onClick={() => setFilter('completed')}>Completati</li>
                <li onClick={() => setFilter('favorite')}>Preferiti</li>
                <li onClick={() => setFilter('pending')}>Da completare</li>
            </ul>
        </aside>
    );
};

export default Sidebar;
