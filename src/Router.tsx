import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./views/Home'));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="users/:current_user" element={<Home />} />
      </Route>
    </Routes>
  );
}
