import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from "react"

import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/Routes'

import { Nav } from '../components/template/Nav'
import { Logo } from '../components/template/Logo'
import { Footer } from '../components/template/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  )