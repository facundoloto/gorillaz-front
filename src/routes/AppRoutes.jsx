import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Member from '../components/Member/Member.jsx';
import ExMember from '../components/ExMember/ExMember.jsx';
import Disks from '../components/Disks/Disks.jsx';

const Loader = lazy(() => import("./../components/Loader/Loader"));

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader isLoading={true} />
        </div>}>
      <Routes>
        <Route path='/' element={<Member />} />
        <Route path='/exmember' element={<ExMember />} />
        <Route path='/disk' element={<Disks />} />
        {/* <Route path='/' element={<Doc />} /> */}
      </Routes>
    </Suspense>
  );
}