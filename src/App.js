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
          <Route path='/' element={<News key={"general"} pageSize={8} category="general" />} />
          <Route path='/technology' element={<News key={"technology"} pageSize={8} category="technology" />} />
          <Route path='/business' element={<News key={"business"} pageSize={8} category="business" />} />
          <Route path='/health' element={<News key={"health"} pageSize={8} category="health" />} />
          <Route path='/entertainment' element={<News key={"entertainment"} pageSize={8} category="entertainment" />} />
          <Route path='/science' element={<News key={"science"} pageSize={8} category="science" />} />
          <Route path='/sports' element={<News key={"sports"} pageSize={8} category="sports" />} />
          {/* </switch> */}
        </Routes >

      </>
    )
  }
}