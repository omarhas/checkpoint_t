import React from 'react'
import "./App.css"
import Adresse from './components/Profile/Adresse'
import Fullname from './components/Profile/Fullname'
import Profilephoto from './components/Profile/Profilephoto'

export default function App() {
    return (
        <div className="app">
          <Profilephoto/>
          <Fullname/>
          <Adresse/>
        </div>
    )
}
