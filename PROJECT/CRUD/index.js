import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Student from './Student';
import Addstudent from './Addstudent';
import Updatestudent from './Updatestudent';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>

    <Routes>

      <Route
        path="/student"
        element={<Student />}
      />

      <Route
        path="/student/add"
        element={<Addstudent />}
      />

      <Route
        path="/update/:id"
        element={<Updatestudent />}
      />

    </Routes>

  </BrowserRouter>
);