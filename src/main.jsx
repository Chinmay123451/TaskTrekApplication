import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

/*
 Notes to remember
1. To create component we use JSX extension which is javascript XML it is a modern code to write
Javascript and XML together. it is a React Code.
2. Browser doesn't understand JSX code so to convert JSX code to JS we need a libray named as Babel
 */