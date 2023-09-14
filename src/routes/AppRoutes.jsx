import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from '../components/Member/Member.jsx';
import ExMember from '../components/ExMember/ExMember.jsx';
import Disks from '../components/Disks/Disks.jsx';

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Member />} />
        <Route path='/exmember' element={<ExMember />} />
        <Route path='/disk' element={<Disks />} />
        {/* <Route path='/' element={<Doc />} /> */}
      </Routes>
    </BrowserRouter>
  );
}