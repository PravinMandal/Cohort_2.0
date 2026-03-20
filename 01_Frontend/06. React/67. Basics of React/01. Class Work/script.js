// React - UI banana
// ReactDOM - connencting react and DOM

// let h1 = React.createElement('h1', null, 'hello from Pravin');
// let h2 = React.createElement('h2', null, 'this is h2');

// let div = React.createElement('div', {id : 'parent', class : 'elem'}, [h1, h2]);

// let root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(div);

import parent from './parent.js'

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent());
