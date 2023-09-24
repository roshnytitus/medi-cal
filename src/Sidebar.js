// import {Link} from 'react-router-dom';
import React from 'react';
import logo from './logo.png';


const Sidebar = () => {
    return (
        // <nav className="sidebar">
        //     <h1>this is the sidebar</h1>
        //     <div className="links">
        //         <Link to="/">Home</Link>
        //         <Link to="/calendar">Create</Link>
        //     </div>
        // </nav>


        <aside className="sidebar">
        <nav>
          <ul>
            <li><img src={logo} alt="MediCal" /></li>
            <li><a href="/calendar">Calendar</a></li>
            <li><a href="/medication">Medication Alerts</a></li>
            <li><a href="/reminders">Reminders</a></li>
            <li><a href="/care">Care Coordination</a></li>
          </ul>
        </nav>
        </aside>

    );
}

export default Sidebar;