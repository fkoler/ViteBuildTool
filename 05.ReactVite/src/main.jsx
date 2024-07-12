import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// console.log(`Server is running in '${import.meta.env.MODE}' mode`);
console.log(import.meta.env);

// if (import.meta.env.DEV) {
//     console.log('This is Dev Server');
// }

// if (import.meta.env.VITE_SOME_KEY) {
//     console.log(import.meta.env.VITE_SOME_KEY);
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
