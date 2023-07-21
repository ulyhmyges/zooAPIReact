import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "./components/user/Users";
import UserDetail from "./components/user/UserDetail";
import Staffs from "./components/staff/Staffs";
import StaffDetail from "./components/staff/StaffDetail";
import Navbar from "./components/navbar/Navbar";
import Animals from './components/animal/Animal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path={'/'} element={<App />} />
              <Route path={'/users'} element={<Users />} />
              <Route path={'/users/:id'} element={<UserDetail />} />
              <Route path={'/staffs'} element={<Staffs />} />
              <Route path={'/staffs/:id'} element={<StaffDetail />} />
              <Route path={'/animals'} element={<Animals />} />
              
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
