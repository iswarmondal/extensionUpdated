import React from 'react';
import './assets/tailwind.css'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { HashRouter as Router } from 'react-router-dom';

const index = (
    <Router><App /></Router>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(index)
