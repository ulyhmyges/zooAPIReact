import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Users from "./components/user/Users";
import UserDetail from "./components/user/UserDetail";
import Staffs from "./components/staff/Staffs";
import StaffDetail from "./components/staff/StaffDetail";
import AuthPage from "./components/auth/AuthPage";
import Animals from "./components/animal/Animals";
import Areas from "./components/area/Areas";
import Dashboard from "./components/user/Dashboard";
import Root from "./components/root/Root";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'login',
                element: <AuthPage />
            }
        ]
    },
    {
        path: '/zoo',
        element: <Root />,
        children: [
            {
                path: 'users',
                element: <Users/>
            },
            {
                path: 'users/:id',
                element: <UserDetail/>
            },
            {
                path: 'staffs',
                element: <Staffs/>
            },
            {
                path: 'staffs/:id',
                element: <StaffDetail/>
            },
            {
                path: 'areas',
                element: <Areas/>
            },
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'animals',
                element: <Animals/>
            },
            {
                path: 'about',
                element: <p>About</p>
            },
        ]
    },

]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
