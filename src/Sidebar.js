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
            <li><a href="#">Calendar</a></li>
            <li><a href="#">Medication Alerts</a></li>
            <li><a href="#">Reminders</a></li>
            <li><a href="#">Care Coordination</a></li>
          </ul>
        </nav>
        </aside>

    );
}

export default Sidebar;