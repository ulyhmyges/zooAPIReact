import React from 'react';
import './App.css';
import {Link, Outlet, useLocation} from "react-router-dom";

function App() {
    const location = useLocation();
    console.log(location)
    if (location.pathname === '/') {
        return (
            <div className={'App'}>
                <h1>Welcome to Planode</h1>
                <button type={'button'}><Link to={'login'}>Connexion</Link></button>
            </div>
        );
    }
    return (
        <div className="App">
            <Link to={'/'}><h1>Welcome to Planode</h1></Link>
            <Outlet/>
        </div>
    );
}

export default App;
