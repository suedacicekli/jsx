// 1.Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2.Get a reference to the div with ID root
const re = document.getElementById('root');
// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(re);

// 4.Create a component
function App() {
    const name = 'Sueda';
    const age = 23;

    return (<p>Hello my name is {name} , I'm {age} years old</p>);
}
// 5. Show the component on the screen
root.render(<App />);