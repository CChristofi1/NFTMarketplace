import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';

const cont = document.getElementById('root');
const root = createRoot(cont);
root.render(<App tab="/" />);
