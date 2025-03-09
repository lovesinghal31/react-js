import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>Custom Appdfdfd!</h1>
        </div>
    );
}


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Vist Google</a>
)

const anotherUsername = " Love Singhal";

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUsername
)

createRoot(document.getElementById('root')).render(
    // <App />
    // ReactElement
    // anotherElement
    reactElement
)
