import logo from './logo.svg';
import { useState,  useEffect, useRef  } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import SchoolProjects from './components/SchoolProjects';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import PersonalProjects from './components/PersonalProjects'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home name={"Yong Qin"} />}/>
        <Route path="SchoolProjects" element={<SchoolProjects />} />
        <Route path="PersonalProjects" element={<PersonalProjects />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="MySkills" element={<MySkills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
