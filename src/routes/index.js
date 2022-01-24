import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../pages/login/Login.component'
import User from '../pages/User'
import Feed from '../pages/User/Feed';
import UserPost from '../pages/User/Post'

const Router = () => {
  return <Routes>
    <Route path='/' element={<Login />} />
    <Route path='user/:username' element={<User />}>
      <Route path='feed' element={<Feed />} />
      <Route path='post/:id' element={<UserPost />} />
      <Route path='*' element={<h2>Page Not Found</h2>} />
    </Route>
  </Routes>;
};

export default Router;
