import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router';
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          {/* <switch> */}
          <Route path='/' element={<News key={"general"} pageSize={6} category="general" />} />
          <Route path='/technology' element={<News key={"technology"} pageSize={6} category="technology" />} />
          <Route path='/business' element={<News key={"business"} pageSize={6} category="business" />} />
          <Route path='/health' element={<News key={"health"} pageSize={6} category="health" />} />
          <Route path='/entertainment' element={<News key={"entertainment"} pageSize={6} category="entertainment" />} />
          <Route path='/science' element={<News key={"science"} pageSize={6} category="science" />} />
          <Route path='/sports' element={<News key={"sports"} pageSize={6} category="sports" />} />
          {/* </switch> */}
        </Routes >

      </>
    )
  }
}