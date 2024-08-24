import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import AllCourses from './pages/AllCourses';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

function App() {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', padding: '10px 0' }}>
          <li>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/fullstack-development" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
              Full Stack Development
            </NavLink>
          </li>
          <li>
            <NavLink to="/data-science" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
              Data Science
            </NavLink>
          </li>
          <li>
            <NavLink to="/cyber-security" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
              Cyber Security
            </NavLink>
          </li>
          <li>
            <NavLink to="/career" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
              Career
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/fullstack-development" element={<FullStackDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
