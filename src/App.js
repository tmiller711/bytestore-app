import React from "react";
import {Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/dashboard/Dashboard";
import SideNav from "./components/sidenav/SideNav";

function App() {
  return (
    <>
      <SideNav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
